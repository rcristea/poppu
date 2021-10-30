import {Component} from 'react'
import {Link} from 'react-router-dom'
import './Signup.component.css'
import NavBar from '../NavBar/NavBar.component'


export class Signup extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push('/signup/payment')
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className='signup-container'>
          <div className='signup-form-border'>
            <div className='signup-form-container'>
              <h1 className='signup-form-header'>Sign Up</h1>
              <p className='subheading'>* All Fields Required</p>
              <form className='form-signup' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Name' name='name'/>
                <input type='text' placeholder='Email' name='email'/>
                <input type='text' placeholder='Phone Number' name='phone_number'/>
                <input type='password' placeholder='Password' name='password'/>
                <input type='password' placeholder='Confirm Password' name='confirm_password'/>
                <button type='submit'>Submit</button>
              </form>
              <p className='login'>Already a poppu member? <Link to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
        {/*Footer here*/}
      </>
    )
  }
}

export default Signup