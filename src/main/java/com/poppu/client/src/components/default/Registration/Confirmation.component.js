import React, { Component } from 'react'

class Confirmation extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null
    }

    return (
      <>
        <div className='registration-step'>
          <h3>Confirmation</h3>
          <p>An email has been sent to <span Style='font-weight: bold'>{this.props.userEmail}</span> with a confirmation code. Please enter the confirmation code here to continue.</p>
          <form onSubmit={this.props.handleSubmitConfirmation}>
            <input
              type='text'
              className='registration-input'
              id='confirmation-code'
              name='confirmationCode'
              placeholder='Confirmation Code'
              value={this.props.confirmationCode}
              onChange={this.props.handleChange} />
          </form>
        </div>
      </>
    )
  }
}

export default Confirmation