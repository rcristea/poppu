import React, {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'
import {TitleComponent} from "../Profile/Utils.component";
import NavBar from "../NavBar/NavBar.component";

export class OrderCheckoutComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.history.location.state,
      selectedPromo: null,
      promos: [],
      addresses: [],
      paymentInfos: [],
      cardType: '',
      cardNum: '',
      expDate: '',
      street: '',
      city: '',
      zipCode: '',
      promoCode: '',
      discountText: ''
    }

    console.log(this.state)
    this.getPayments = this.getPayments.bind(this)
    this.fetchPaymentCards = this.fetchPaymentCards.bind(this)
    this.fetchPromos = this.fetchPromos.bind(this)
    this.changePayment = this.changePayment.bind(this)
    this.applyPromos = this.applyPromos.bind(this)
  }

  async getPayments() {
    let paymentCards = await this.fetchPaymentCards('http://localhost:8080/users/'.concat(this.state.userProfile.id).concat('/paymentCards'))
    this.setState({
      ...this.state,
      paymentInfos: paymentCards._embedded.paymentinfos.map(paymentCard => {
        paymentCard.encrypedCard = paymentCard.cardNum
        paymentCard.cardNum = Math.floor(Math.random() * 1E16)
        return paymentCard
      }),
    })
    console.log(this.state)
  }

  async fetchPaymentCards(cards_link) {
    return new Promise(function (resolve, reject) {
      fetch(cards_link, {
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

  async fetchAddress(address_link) {
    return new Promise(function (resolve, reject) {
      fetch(address_link, {
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

  async getPromos() {
    let promos = await this.fetchPromos('http://localhost:8080/promotions/')
    this.setState({
      ...this.state,
      promos: promos._embedded.promotions
    })
    console.log(this.state)
  }

  applyPromos(code) {
    let codeInt = parseInt(code)
    console.log(codeInt)
    let selectedPromo = null;
    if (this.state.promos && this.state.promos.map(promo => {
      return promo.promotionId
    }).includes(codeInt)) {
      let index = this.state.promos.map(promo => {
        return promo.promotionId
      }).indexOf(codeInt)
      this.setState({
        ...this.state,
        selectedPromo: this.state.promos[index],
        discountText: 'You get: '.concat(this.state.promos[index].offer)
      })
    } else {
      this.setState({
        ...this.state,
        selectedPromo: null,
        discountText: 'No promotion applied'
      })
    }
  }

  async fetchPromos(promo_link) {
    return new Promise(function (resolve, reject) {
      fetch(promo_link, {
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

  async changePayment(paymentCard) {
    let address = await this.fetchAddress(paymentCard._links.address.href)
    if (this.state.cardNum !== paymentCard.cardNum) {
      this.setState({
        ...this.state,
        cardType: paymentCard.cardType,
        cardNum: paymentCard.cardNum,
        expDate: paymentCard.expDate,
        street: address.street,
        city: address.city,
        zipCode: address.zipCode,
      })
    }
  }

  renderPaymentOptions() {
    if (this.state.paymentInfos.length !== 0) {
      return (
        <>
          {this.state.paymentInfos.map(paymentCard => {
            return (
              <button className='booking-submit push-right' onClick={event => {
                this.changePayment(paymentCard)
              }}>Your {paymentCard.cardType}</button>
            )
          })}
        </>
      )
    } else {
      return null
    }
  }

  componentDidMount() {
    this.getPayments()
    this.getPromos()
  }


  goNext() {
    this.props.history.push({
      pathname: '/booking/order/confirm',
      state: {
        userProfile: this.state.userProfile,
        selectedShow: this.state.selectedShow,
        selectedMovie: this.state.selectedMovie,
        adultTickets: this.state.adultTickets,
        childTickets: this.state.childTickets,
        seniorTickets: this.state.seniorTickets,
        selectedSeats: this.state.selectedSeats,
        selectedPromo: this.state.selectedPromo,
        cardType: this.state.cardType,
        cardNum: this.state.cardNum,
        expDate: this.state.expDate,
        street: this.state.street,
        city: this.state.city,
        zipCode: this.state.zipCode,
        promoCode: this.state.promoCode
      }
    })
  }


  render() {
    return (
      <>
        <NavBar />
        <div className='booking-container'>
          <div className='booking-header'>
            <h3 className='booking-title'>Checkout</h3>
          </div>
          <div className='payment-options'>
            {this.renderPaymentOptions()}
          </div>
          <div className='payment-form'>
            <div className='order-row'>
              <p className='booking-label grow'>Card Type</p>
              <input type='text' className='payment-input' value={this.state.cardType} onChange={e => this.setState({
                ...this.state, cardType: e.target.value
              })}/>
            </div>
            <div className='order-row'>
              <p className='booking-label grow'>Card Number</p>
              <input type={'text'} className='payment-input' value={this.state.cardNum} onChange={e => this.setState({
                ...this.state, cardNum: e.target.value
              })}/>
            </div>
            <div className='order-row'>
              <p className='booking-label grow'>Expiration Date</p>
              <input type={'text'} className='payment-input' value={this.state.expDate} onChange={e => this.setState({
                ...this.state, expDate: e.target.value
              })}/>
            </div>
            <p className='order-heading'>Billing Address</p>
            <div className='order-row'>
              <p className='booking-label grow'>Street</p>
              <input type={'text'} className='payment-input' value={this.state.street} onChange={e => this.setState({
                ...this.state, street: e.target.value
              })}/>
            </div>
            <div className='order-row'>
              <p className='booking-label grow'>City</p>
              <input type={'text'} className='payment-input' value={this.state.city} onChange={e => this.setState({
                ...this.state, city: e.target.value
              })}/>
            </div>
            <div className='order-row'>
              <p className='booking-label grow'>Zipcode</p>
              <input type={'text'} className='payment-input' value={this.state.zipCode} onChange={e => this.setState({
                ...this.state, zipCode: e.target.value
              })}/>
            </div>
            <p className='order-heading'>Promotion</p>
            <p className='order-subtext'>{this.state.discountText}</p>
            <div className='order-row'>
              <p className='booking-label grow'>Promotion Code</p>
              <input type={'text'} className='payment-input' value={this.state.promoCode} onChange={e => this.setState({
                ...this.state, promoCode: e.target.value
              })}/>
            </div>
            <button className='booking-cancel' onClick={event => this.applyPromos(this.state.promoCode)}>Apply Promotion</button>
            <div className='booking-buttons'>
              <button className='booking-submit' onClick={event => this.goNext()}>Confirm Order</button>
              <a type='button' className='booking-cancel' href={'/search'}>Cancel</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default OrderCheckoutComponent