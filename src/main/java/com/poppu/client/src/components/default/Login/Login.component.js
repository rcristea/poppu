import { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.component.css'
import NavBar from '../NavBar/NavBar.component'


export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  async getUser(email) {
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/api/users/email?email=${email}`, {
        method: 'GET',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        })
      }).catch(error => {
        error.json().then(error => {
          reject(error)
        })
      })
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }


  handleSubmit = async(e) => {
    e.preventDefault()

    let user = await this.getUser(this.state.email)

    console.log(user)
    // let admin = false
    // let user = true
    // let loggedIn = true
    // if (loggedIn && admin) {
    //   sessionStorage.setItem('role', 'admin')
    //   alert('Logged in as admin')
    //   this.props.history.push('/admin')
    // } else if (loggedIn && user) {
    //   sessionStorage.setItem('role', 'user')
    //   alert('Logged in as user')
    //   this.props.history.push('/profile')
    // }
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='login-container'>
          <div className='form-border'>
            <div className='form-container'>
              <h1 className='form-header'>Login</h1>
              {this.state.email} {this.state.password}
              <form className='form-login' onSubmit={this.handleSubmit}>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  autoComplete='email'
                  onChange={this.handleChange} />
                <input
                  type='password'
                  placeholder='●●●●●●●●'
                  name='password'
                  autoComplete='password'
                  onChange={this.handleChange} />
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