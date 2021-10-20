import { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.component.css'
import NavBar from '../NavBar/NavBar.component'


export class Login extends Component {
  handleSubmit = async(e) => {
    e.preventDefault()

    let admin = false
    let user = true
    let loggedIn = true
    if (loggedIn && admin) {
      sessionStorage.setItem('role', 'admin')
      alert('Logged in as admin')
      this.props.history.push('/admin')
    } else if (loggedIn && user) {
      sessionStorage.setItem('role', 'user')
      alert('Logged in as user')
      this.props.history.push('/')
    }

  }

  render() {
    return (
      <>
        <NavBar />
        <div className='login-container'>
          <div className='form-border'>
            <div className='form-container'>
              <h1 className='form-header'>Login</h1>
              <form className='form-login' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Email' name='email'/>
                <input type='password' placeholder='●●●●●●●●' name='password'/>
                <button type='submit'>Login</button>
              </form>
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