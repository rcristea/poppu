import { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.component.css'
import NavBar from '../NavBar/NavBar.component'


export class Login extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='login-container'>
          <div className='form-border'>
            <div className='form-container'>
              <h1 className='form-header'>Login</h1>
              <form className='form-login'>
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