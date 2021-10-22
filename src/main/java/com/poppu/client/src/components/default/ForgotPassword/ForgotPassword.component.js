import { Component } from 'react'
import {Link} from 'react-router-dom'
import './ForgotPassword.component.css'
import NavBar from '../NavBar/NavBar.component'


export class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      code: '',
      hasSentEmail: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
    this.renderHasSentEmail = this.renderHasSentEmail.bind(this)
  }

  sendEmail() {
    // TODO send email with code

    this.setState({
      hasSentEmail: true,
    })
  }

  renderHasSentEmail() {
    if (this.state.hasSentEmail) {
      return (
        <>
          <p>Please enter your code that was sent to your email.</p>
          <input
            type='text'
            placeholder='Code'
            name='code'
            autoComplete='code'
            onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </>
      )
    } else {
      return (
        <>
          <p>Please enter your email that you signed up with so we can send you a temporary password.</p>
          <input
            type='text'
            placeholder='Email'
            name='email'
            autoComplete='email'
            onChange={this.handleChange} />
          <button onClick={this.sendEmail}>Send Email</button>
        </>
      )
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='login-container'>
          <div className='form-border-forgot-password'>
            <div className='form-container-forgot-password'>
              <h1 className='form-header'>Forgot Password</h1>
              <form className='form-login' onSubmit={this.handleSubmit}>
                {this.renderHasSentEmail()}
              </form>
            </div>
          </div>
        </div>
        {/*Footer here*/}
      </>
    )
  }
}

export default ForgotPassword