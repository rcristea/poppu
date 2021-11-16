import React, {Component} from 'react'

class Confirmation extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      return null
    }

    return (
      <>
        <div className='registration-step'>
          <form className='registration-form' onSubmit={this.props.handleSubmit}>
            <h3>Confirmation</h3>
            <p>An email has been sent to <span>{this.props.userEmail}</span> with a confirmation code. Please enter the
              confirmation code here to continue.</p>
            <input
              type='text'
              className='registration-input'
              id='confirmation-code'
              name='confirmationCode'
              placeholder='Confirmation Code'
              value={this.props.confirmationCode}
              onChange={this.props.handleChange}/>
            <br/>
            <button
              className='registration-button registration-submit'
              type='submit'>Submit
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default Confirmation