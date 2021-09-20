import { Component } from 'react'
import {Link} from "react-router-dom"
import './Login.component.css'
import NavBar from '../NavBar/NavBar.component'


export class Login extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='login-container'>
          <div className='form-border'>
            <div className='form-container'>
              <h1 className='form-header'>Login</h1>
              <form className='form-login'>
                <input type='text' placeholder='Email or Username'/>
                <input type='password' placeholder='●●●●●●●●'/>
                <button type='submit'>Login</button>
              </form>
              <p className='signup'>New to poppu? <Link to='/signup'>Sign up</Link></p>
            </div>
          </div>
        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default Login