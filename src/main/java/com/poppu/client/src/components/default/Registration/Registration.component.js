import React, { Component } from 'react'
import './Registration.component.css'
import NavBar from '../NavBar/NavBar.component'
import Step1 from './Step1.component'
import Step2 from './Step2.component'
import Step3 from './Step3.component'
import Confirmation from './Confirmation.component'
import isEmail from 'validator/es/lib/isEmail'
import isStrongPassword from 'validator/es/lib/isStrongPassword'
import isCreditCard from 'validator/es/lib/isCreditCard'
import bcrypt from 'bcryptjs'

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      promo: true,
      cardType: '0',
      cardNumber: '',
      cardExpiry: '',
      billingStreet: '',
      billingCity: '',
      billingZip: '',
      billingState: '0',
      homeStreet: '',
      homeCity: '',
      homeZip: '',
      homeState: '0',
      formErrors: [],
      confirmationCode: '',
      salt: '$2a$10$O1RbZIPCQCLr522HZUP51/', // for encryption
    }

    this.handleChange = this.handleChange.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.postData = this.postData.bind(this)
    this.putData = this.putData.bind(this)
  }

  prev() {
    let currentStep = this.state.currentStep

    if (currentStep !== 1) {
      this.setState({
        currentStep: currentStep - 1,
      })
    }
  }

  next() {
    let currentStep = this.state.currentStep

    if (currentStep !== 3) {
      this.setState({
        currentStep: currentStep + 1,
      })
    }
  }

  renderButtons() {
    if (this.state.currentStep === 4) {
      return null
    }

    let nextButton = <button
        className='registration-button registration-next'
        type='button'
        onClick={this.next}
      >Next</button>
    let prevButton = <button
        className='registration-button registration-prev'
        type='button'
        onClick={this.prev}
      >Back</button>
    let submitButton = <button
      className='registration-button registration-submit'
      type='submit'>Submit</button>
    return (
      <div>
        { this.state.currentStep !== 1 ? prevButton : null }
        { this.state.currentStep !== 3 ? nextButton : null }
        { this.state.currentStep === 3 ? submitButton : null }
      </div>
    )
  }

  renderErrors() {
    if (this.state.formErrors.length === 0) {
      return null
    }

    return (
      <div className='registration-form-errors'>
        <ul>
          {this.state.formErrors.map(error => {
            return (
              <li key={error}>{error}</li>
            )
          })}
        </ul>
      </div>
    )
  }

  async validateForm() {
    let formErrors = []

    if (this.state.name.length === 0) {
      formErrors.push('The name field must be filled in.')
    }

    if (this.state.email.length === 0) {
      formErrors.push('The email field must be filled in.')
    } else if (!isEmail(this.state.email)) {
      formErrors.push('Please enter a valid email.')
    }

    if (this.state.phone.length === 0) {
      formErrors.push('The phone number field must be filled in.')
    }

    if (this.state.password.length === 0 || this.state.password.length === 0) {
      formErrors.push('The password and confirm password fields must be filled in.')
    } else if (!isStrongPassword(this.state.password)) {
      formErrors.push('Your password must have: Minimum length 8, 1 upper case letter, 1 lower case letter, 1 number and 1 symbol.')
    } else if (this.state.password !== this.state.confirmPassword) {
      formErrors.push('Your passwords must match.')
    }

    if (this.state.cardType === 0 && this.state.cardNumber.length > 0) {
      formErrors.push('Please select the type of payment.')
    }

    if (this.state.cardNumber.length > 0) {
      if (this.state.cardType === 0) {
        formErrors.push('Please select a type for your payment information.')
      } else if (!isCreditCard(this.state.cardNumber)) {
        formErrors.push('Please enter a valid card number.')
      } else if (this.state.cardExpiry.length === 0) {
        formErrors.push('The expiration date must be filled out for your payment information.')
      } else if (
        this.state.billingStreet.length === 0 ||
        this.state.billingState         === 0 ||
        this.state.billingCity.length   === 0 ||
        this.state.billingZip.length    === 0
      ) {
        formErrors.push('The billing address cannot be empty if you are providing billing information.')
      }
    }

    if (this.state.homeStreet.length > 0) {
      if (
        this.state.homeState === 0 ||
        this.state.homeCity.length === 0 ||
        this.state.homeZip.length === 0
      ) {
        formErrors.push('If you are filling out your home address, you must complete the entire address.')
      }
    }


    if (formErrors.length > 0) {
      await this.setState({
        formErrors: formErrors,
        currentStep: 1,
      })
    } else {
      await this.setState({
        formErrors: [],
      })
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  async putData(data, destination) {
    return new Promise(function (resolve, reject) {
      fetch(destination, {
        method: 'PUT',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'text/uri-list',
          'Content-Type': 'text/uri/list'
        },
        body: data,
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  async postData(data, destination) {
    return new Promise(function (resolve, reject) {
      console.log(data, destination)
      fetch(`http://localhost:8080/${destination}/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault()

    await this.validateForm()
    if (this.state.formErrors.length !== 0) {
      return
    }

    let userHomeAddressJSON
    let userBillingAddressJSON
    let userPaymentJSON
    let userJSON

    let hasHomeAddress = this.state.homeStreet.length > 0
    let hasUserPayment = this.state.cardNumber.length > 0

    // Create user's address

    if (hasHomeAddress) {
      let userHomeAddress = {
        'city': this.state.homeCity,
        'street': this.state.homeStreet,
        'zipCode': this.state.homeZip,
      }

      userHomeAddressJSON = await this.postData(userHomeAddress, 'addresses')
    }

    // Create User

    let userData = {
      'firstName': this.state.name.split(' ')[0],
      'lastName': this.state.name.split(' ')[1],
      'role': 'USER',
      'email': this.state.email,
      'password': bcrypt.hashSync(this.state.password, this.state.salt),
      'phoneNum': this.state.phone,
      'isSubscribed': this.state.promo,
      'status': 'INACTIVE',
    }

    userJSON = await this.postData(userData, 'users')

    if (hasHomeAddress) {
      await this.putData(
        userHomeAddressJSON['_links']['self']['href'],
        userJSON['_links']['address']['href']
      )
    }

    // Create user's payment info

    if (hasUserPayment) {
      let userBillingAddress =  {
        'street': this.state.billingStreet,
        'city': this.state.billingCity,
        'zipCode': this.state.billingZip,
      }

      userBillingAddressJSON = await this.postData(userBillingAddress, 'addresses')

      let userPayment = {
        'cardNum': bcrypt.hashSync(this.state.cardNumber, this.state.salt),
        'cardType': this.state.cardType,
        'expDate': this.state.cardExpiry,
      }

      userPaymentJSON = await this.postData(userPayment, 'paymentinfos')

      await this.putData(
        userBillingAddressJSON['_links']['self']['href'],
        userPaymentJSON['_links']['address']['href']
      )

      await this.putData(
        userPaymentJSON['_links']['self']['href'],
        userJSON['_links']['paymentCards']['href']
      )
    }

    this.setState({
      currentStep: 4,
    })
  }

  handleSubmitConfirmation = e => {
    e.preventDefault()
    alert('Handle confirmation code here')
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='registration-container'>
          <div className='registration-form-container'>
            <h1>Registration</h1>
            <div className='divider gradient-border' />
            <form className='registration-form' onSubmit={this.handleSubmit}>
              <div className='registration-buttons'>
                {this.renderButtons()}
                {this.renderErrors()}
              </div>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                name={this.state.name}
                email={this.state.email}
                phone={this.state.phone}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                promo={this.state.promo} />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                cardType={this.state.cardType}
                cardNumber={this.state.cardNumber}
                cardExpiry={this.state.cardExpiry}
                billingStreet={this.state.billingStreet}
                billingCity={this.state.billingCity}
                billingZip={this.state.billingZip}
                billingState={this.state.billingState} />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                homeStreet={this.state.homeStreet}
                homeCity={this.state.homeCity}
                homeZip={this.state.homeZip}
                homeState={this.state.homeState} />
            </form>
            <Confirmation
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmitConfirmation}
              userEmail={this.state.email}
              confirmationCode={this.state.confirmationCode} />
          </div>
        </div>
      </>
    )
  }
}

export default Registration