import React, { Component } from 'react'

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
            value={this.props.name}
            onChange={this.props.handleChange} />
          <input
            type='email'
            className='registration-input'
            id='email'
            name='email'
            placeholder='Email'
            value={this.props.email}
            onChange={this.props.handleChange} />
          <input
            type='text'
            className='registration-input'
            id='phone'
            name='phone'
            placeholder='Phone Number'
            value={this.props.phone}
            onChange={this.props.handleChange} />
          <input
            type='password'
            className='registration-input'
            id='password'
            name='password'
            placeholder='Password'
            value={this.props.password}
            onChange={this.props.handleChange} />
          <input
            type='password'
            className='registration-input'
            id='confirm-password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={this.props.confirmPassword}
            onChange={this.props.handleChange} />
        </div>
      </>
    )
  }
}

export default Step1