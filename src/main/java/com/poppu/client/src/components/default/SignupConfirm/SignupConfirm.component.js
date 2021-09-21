import { Component } from 'react'
import { Link } from "react-router-dom"
import './SignupConfirm.component.css'
import NavBar from '../NavBar/NavBar.component'


export class SignupConfirm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='signup-container'>
          <div className='signup-confirm-form-border'>
            <div className='signup-confirm-form-container'>
              <p className='signup-confirm-header'>A code has been sent to the email you used to sign up. Please enter the code to confirm your account.</p>
              <form className='form-signup' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter code' name='confirmation_code' />
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default SignupConfirm