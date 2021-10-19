import React, { Component } from 'react'
import InputMask from "react-input-mask";

class Step1 extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return (
      <>
        <p>* All fields on this step are required</p>
        <div className='registration-step'>
          <input
            type='text'
            className='registration-input'
            id='name'
            name='name'
            placeholder='Name'
            autoComplete='name'
            value={this.props.name}
            onChange={this.props.handleChange} />
          <input
            type='email'
            className='registration-input'
            id='email'
            name='email'
            placeholder='Email'
            autoComplete='email'
            value={this.props.email}
            onChange={this.props.handleChange} />
          <InputMask
            mask='(999) 999 - 9999'
            className='registration-input'
            id='phone'
            name='phone'
            placeholder='Phone Number'
            autoComplete='tel'
            value={this.props.phone}
            onChange={this.props.handleChange}/>
          <div className='registration-password-info'>
            <p>Password must contain at least:</p>
            <ul>
              <li>1 upper case letter</li>
              <li>1 lower case letter</li>
              <li>1 number</li>
              <li>1 special character</li>
              <li>8 characters</li>
            </ul>
          </div>
          <input
            type='password'
            className='registration-input'
            id='password'
            name='password'
            placeholder='Password'
            autoComplete='new-password'
            value={this.props.password}
            onChange={this.props.handleChange} />
          <input
            type='password'
            className='registration-input'
            id='confirm-password'
            name='confirmPassword'
            placeholder='Confirm Password'
            autoComplete='off'
            value={this.props.confirmPassword}
            onChange={this.props.handleChange} />
          <div className='registration-checkbox'>
            <input
              type='checkbox'
              className='registration-input'
              id='promo'
              name='promo'
              defaultChecked={this.props.promo}
              onChange={this.props.handleChange}/>
            <label htmlFor='promo'>Register for promotion emails</label>
          </div>
        </div>
      </>
    )
  }
}

export default Step1