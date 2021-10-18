import React, { Component } from 'react'
import InputMask from 'react-input-mask'

class Step2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <>
        <div className='registration-step'>
          <h3>Payment Information</h3>
          <select
            className='registration-input'
            id='card-type'
            name='cardType'
            value={this.props.cardType}
            onChange={this.props.handleChange} >
            <option value='0' disabled={true}>Type: </option>
            <option value='1'>Type 1</option>
            <option value='2'>Type 2</option>
          </select>
          <input
            type='text'
            className='registration-input'
            id='card-number'
            name='cardNumber'
            placeholder='Card Number'
            value={this.props.cardNumber}
            onChange={this.props.handleChange} />
          <InputMask
            mask='99/99'
            className='registration-input'
            id='card-expiry'
            name='cardExpiry'
            placeholder='Expiration Date'
            value={this.props.cardExpiry}
            onChange={this.props.handleChange}/>
          <h3>Billing</h3>
          <input
            type='text'
            className='registration-input'
            id='billing-street'
            name='billingStreet'
            placeholder='Street Address'
            value={this.props.billingStreet}
            onChange={this.props.handleChange} />
          <input
            type='text'
            className='registration-input'
            id='billing-city'
            name='billingCity'
            placeholder='City'
            value={this.props.billingCity}
            onChange={this.props.handleChange} />
          <input
            type='text'
            className='registration-input'
            id='billing-zip'
            name='billingZip'
            placeholder='Zipcode'
            value={this.props.billingZip}
            onChange={this.props.handleChange} />
          <select
            className='registration-input'
            id='billing-state'
            name='billingState'
            value={this.props.billingState}
            onChange={this.props.handleChange} >
            <option value='0' disabled={true}>State</option>
            <option value='AL'>Alabama</option>
            <option value='AK'>Alaska</option>
            <option value='AZ'>Arizona</option>
            <option value='AR'>Arkansas</option>
            <option value='CA'>California</option>
            <option value='CO'>Colorado</option>
            <option value='CT'>Connecticut</option>
            <option value='DE'>Delaware</option>
            <option value='DC'>District Of Columbia</option>
            <option value='FL'>Florida</option>
            <option value='GA'>Georgia</option>
            <option value='HI'>Hawaii</option>
            <option value='ID'>Idaho</option>
            <option value='IL'>Illinois</option>
            <option value='IN'>Indiana</option>
            <option value='IA'>Iowa</option>
            <option value='KS'>Kansas</option>
            <option value='KY'>Kentucky</option>
            <option value='LA'>Louisiana</option>
            <option value='ME'>Maine</option>
            <option value='MD'>Maryland</option>
            <option value='MA'>Massachusetts</option>
            <option value='MI'>Michigan</option>
            <option value='MN'>Minnesota</option>
            <option value='MS'>Mississippi</option>
            <option value='MO'>Missouri</option>
            <option value='MT'>Montana</option>
            <option value='NE'>Nebraska</option>
            <option value='NV'>Nevada</option>
            <option value='NH'>New Hampshire</option>
            <option value='NJ'>New Jersey</option>
            <option value='NM'>New Mexico</option>
            <option value='NY'>New York</option>
            <option value='NC'>North Carolina</option>
            <option value='ND'>North Dakota</option>
            <option value='OH'>Ohio</option>
            <option value='OK'>Oklahoma</option>
            <option value='OR'>Oregon</option>
            <option value='PA'>Pennsylvania</option>
            <option value='RI'>Rhode Island</option>
            <option value='SC'>South Carolina</option>
            <option value='SD'>South Dakota</option>
            <option value='TN'>Tennessee</option>
            <option value='TX'>Texas</option>
            <option value='UT'>Utah</option>
            <option value='VT'>Vermont</option>
            <option value='VA'>Virginia</option>
            <option value='WA'>Washington</option>
            <option value='WV'>West Virginia</option>
            <option value='WI'>Wisconsin</option>
            <option value='WY'>Wyoming</option>
          </select>
        </div>
      </>
    )
  }
}

export default Step2