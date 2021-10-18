import React, { Component } from 'react'
import './Registration.component.css'
import NavBar from '../NavBar/NavBar.component'
import Step1 from './Step1.component'
import Step2 from './Step2.component'
import Step3 from './Step3.component'

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
    }

    this.handleChange = this.handleChange.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
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
    let nextButton = <button
        className='registration-next'
        type='button'
        onClick={this.next}
      >Next</button>
    let prevButton = <button
        className='registration-prev'
        type='button'
        onClick={this.prev}
      >Back</button>
    return (
      <div>
        { this.state.currentStep !== 1 ? prevButton : null }
        { this.state.currentStep !== 3 ? nextButton : null }
      </div>
    )
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert('must implement')
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='registration-container'>
          <form className='registration-form' onSubmit={this.handleSubmit}>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              cardType={this.state.cardType}
              cardNumber={this.state.cardNumber}
              cardExpiry={this.state.cardExpiry}
              billingStreet={this.state.billingStreet}
              billingCity={this.state.billingCity}
              billingZip={this.state.billingZip}
              billingState={this.state.billingState}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              homeStreet={this.state.homeStreet}
              homeCity={this.state.homeCity}
              homeZip={this.state.homeZip}
              homeState={this.state.homeState}
            />
            <div className='registration-buttons'>
              {this.renderButtons()}
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Registration