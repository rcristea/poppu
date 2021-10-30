import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.component.css'
import NavBar from '../NavBar/NavBar.component'
import bcrypt from 'bcryptjs'


export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      remember_me: true,
      isValid: true,
      salt: '$2a$10$O1RbZIPCQCLr522HZUP51/', // for encryption
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.getUser = this.getUser.bind(this)
    this.renderIsValid = this.renderIsValid.bind(this)
  }

  renderIsValid() {
    if (!this.state.isValid) {
      return (
        <div className='invalid-container'>
          <p>Your email or password is invalid.</p>
        </div>
      )
    }
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

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value,
      isValid: true,
    })
  }

  handleCheckChange(event) {
    let isChecked = event.target.checked
    this.setState({
      remember_me: isChecked
    })
  }


  handleSubmit = async (e) => {
    if (e) {
      e.preventDefault()
    }

    if (this.state.email.length === 0 || this.state.password === 0) {
      this.setState({
        isValid: false
      })

      return
    }

    try {
      let user = await this.getUser(this.state.email)
      let inputHash = await bcrypt.hash(this.state.password, this.state.salt)

      if (user['password'] === inputHash) {
        if (this.state.remember_me) {
          let cookie = {
            email: this.state.email,
            password: this.state.password,
          }

          localStorage.setItem('remember_me', JSON.stringify(cookie))
        } else {
          localStorage.removeItem('remember_me')
        }


        let role = user['role'].toLowerCase()
        sessionStorage.setItem('role', role)
        sessionStorage.setItem('user_email', this.state.email)
        if (role === 'user') {
          this.props.history.push('/profile')
        } else if (role === 'admin') {
          this.props.history.push('/admin')
        }
      } else {
        this.setState({
          isValid: false,
        })
      }
    } catch (e) {
      this.setState({
        isValid: false,
      })
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role')) {
      let role = sessionStorage.getItem('role')
      this.props.history.push(role === 'user' ? '/profile' : '/admin')
    }
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className='login-container'>
          <div className='form-border'>
            <div className='form-container'>
              <h1 className='form-header'>Login</h1>
              {this.renderIsValid()}
              <form className='form-login' onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  autoComplete='email'
                  onChange={this.handleChange}/>
                <input
                  type='password'
                  placeholder='●●●●●●●●'
                  name='password'
                  autoComplete='password'
                  onChange={this.handleChange}/>
                <div className='remember-me-wrapper'>
                  <input
                    type='checkbox'
                    className='registration-input'
                    id='remember_me'
                    name='remember_me'
                    defaultChecked={this.state.remember_me}
                    onChange={this.handleCheckChange}/>
                  <label htmlFor='promo'>Remember me</label>
                </div>
                <button type='submit'>Login</button>
              </form>
              <p className='forgot-password'>Forgot your password? <Link to='/forgot_password'>Click here</Link></p>
              <p className='signup'>New to poppu? <Link to='/register'>Sign up</Link></p>
            </div>
          </div>
        </div>
        {/*Footer here*/}
      </>
    )
  }
}

export default Login