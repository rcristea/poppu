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
    }

    this.handleChange = this.handleChange.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.validateForm = this.validateForm.bind(this)
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

  handleSubmit = e => {
    e.preventDefault()
    this.validateForm().then(response => {
      if (this.state.formErrors.length !== 0) {
        return
      }

      console.log('TODO - send request to backend to create an inactive user')
      console.log('in the .then() of axios after the response is received, send another request to send an email with the confirmation code')

      this.setState({
        currentStep: 4,
      })
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