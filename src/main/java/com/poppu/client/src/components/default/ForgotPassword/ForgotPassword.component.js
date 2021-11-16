import {Component} from 'react'
import './ForgotPassword.component.css'
import NavBar from '../NavBar/NavBar.component'


export class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      code: '',
      hasSentEmail: false,
      hasError: false,
      hasCodeError: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.getUser = this.getUser.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
    this.validateCode = this.validateCode.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.renderHasSentEmail = this.renderHasSentEmail.bind(this)
    this.renderHasError = this.renderHasError.bind(this)
    this.createValidator = this.createValidator.bind(this)
  }

  validateCode() {
    let email = this.state.email
    let code = this.state.code
    let params = `email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/api/validator/validate?${params}`, {
        method: 'PUT',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  getUser(email) {
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/api/users/email?email=${email}`, {
        method: 'GET',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  createValidator() {
    let email = this.state.email
    return new Promise(function (resolve, reject) {
      fetch('http://localhost:8080/api/validator/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  sendEmail() {
    this.createValidator().then(response => {
      let email = this.state.email
      return new Promise(function (resolve, reject) {
        fetch('http://localhost:8080/api/validator/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `email=${encodeURIComponent(email)}`
        }).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    })
  }

  nextStep() {
    this.getUser(this.state.email).then(response => {
      this.sendEmail()
      this.setState({
        hasSentEmail: true,
        hasError: false,
      })
    }).catch(error => {
      this.setState({
        hasSentEmail: false,
        hasError: true,
      })
    })
  }

  renderHasError() {
    if (this.state.hasError) {
      return (
        <div className='forgot-password-error'>
          <p>The email was not sent. Are you using the correct email?</p>
        </div>
      )
    }

    if (this.state.hasCodeError) {
      return (
        <div className='forgot-password-error'>
          <p>The code does not match.</p>
        </div>
      )
    }
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
            value={this.state.code}
            onChange={this.handleChange}/>
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
            value={this.state.email}
            onChange={this.handleChange}/>
          <button type='button' onClick={this.nextStep}>Send Email</button>
        </>
      )
    }
  }

  handleChange(event) {
    this.setState({
      hasError: false,
      hasCodeError: false,
    })

    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.validateCode().then(response => {
      if (response['validated']) {
        sessionStorage.setItem('role', 'user')
        sessionStorage.setItem('user_email', this.state.email)
        this.props.history.push('/profile')
      } else {
        this.setState({
          hasError: false,
          hasCodeError: true,
        })
      }
    })
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className='login-container'>
          <div className='form-border-forgot-password'>
            <div className='form-container-forgot-password'>
              <h1 className='form-header'>Forgot Password</h1>
              {this.renderHasError()}
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