import React, {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import './SelectSeats.component.css'
import {getData, getSeats, getUser} from "../Profile/methods";
import NavBar from "../NavBar/NavBar.component";

export class OrderSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.history.location.state
    this.state = {
      ...this.state,
      userProfile: null
    }
    console.log(this.state)
    this.renderUser = this.renderUser.bind(this)
    this.renderMovie = this.renderMovie.bind(this)
    this.renderTickets = this.renderTickets.bind(this)
    this.renderSeatNames = this.renderSeatNames.bind(this)
    this.renderShow = this.renderShow.bind(this)
    this.renderTotal = this.renderTotal.bind(this)

    this.goNext = this.goNext.bind(this)
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchSeats = this.fetchSeats.bind(this)
  }

  async componentDidMount() {
    this.fetchUser()
    let seatNames = await this.fetchSeats()
    this.setState({
      ...this.state,
      seatNames: seatNames
    })
  }

  async fetchUser() {
    let user_email = sessionStorage.getItem('user_email')
    if (!user_email) {
      let user = await getUser('poppucustomer@gmail.com')
      this.setState({
        ...this.state,
        userProfile: user
      })
    } else if (user_email === '') {
      let user = await getUser('poppucustomer@gmail.com')
      this.setState({
        ...this.state,
        userProfile: user
      })
    } else {
      let user = await getUser(user_email)
      this.setState({
        ...this.state,
        userProfile: user
      })
    }
    console.log(this.state.userProfile)
  }

  renderUser() {
    if(this.state.userProfile) {
      return (
        <>
          <div className='booking-user-info'>
            <div className='order-row'>
              <p className='booking-label'>ID: {this.state.userProfile.id}</p>
            </div>
            <div className='order-row'>
              <p className='booking-label'>Name: {this.state.userProfile.firstName} {this.state.userProfile.lastName}</p>
            </div>
          </div>
        </>
      )
    }
  }

  renderMovie() {
    return (
      <>
        <div className='booking-movie-info'>
          <div className='order-row'>
            <p className='booking-label push-right'>Movie: {this.state.selectedMovie.title}</p>
            <p className='booking-label push-right'>Rating: {this.state.selectedMovie.rating}</p>
            <p className='booking-label'>Duration: {this.state.selectedMovie.duration}</p>
          </div>
        </div>
      </>
    )
  }

  renderShow() {
    return (
      <>
        <div className='booking-show-info'>
          <div className='order-row'>
            <p className='booking-label'>Show Date: {new Date(this.state.selectedShow.dateTime).toLocaleDateString('en-US')}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Show Time: {new Date(this.state.selectedShow.dateTime).toLocaleTimeString('en-US')}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Show Room: {this.state.selectedShow.showroom.name}</p>
          </div>
        </div>
      </>
    )
  }

  async fetchSeats() {
    let seatRes = await getSeats("http://localhost:8080/seats/")
    let seats = seatRes._embedded.seats;
    let seatNames = []
    console.log(seats);
    seats.map(seat => {
      if (this.state.selectedSeats.includes(seat.seatId)) {
        seatNames.push(seat.seat)
      }
    })
    return seatNames
  }

  renderSeatNames() {
    if (this.state.seatNames) {
      return (
        <>
          <div className='booking-seat-names-info'>
            <div className='order-row'>
              <p className='booking-label'>Selected Seats:</p>
            </div>
            <div className='order-row'>
              {this.state.seatNames.map(seatName => {
                return <p className='booking-label push-right'>{seatName}</p>
              })}
            </div>
          </div>
        </>
      )
    } else {
      return (
        <div className='booking-seat-names-info'>
          <p className='booking-label'>No seats selected</p>
        </div>
      )
    }
  }

  renderTickets() {
    return (
      <>
        <div className='booking-ticket-info'>
          <div className='order-row'>
            <p className='booking-label'>Adult Tickets: {this.state.adultTickets}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Child Tickets: {this.state.childTickets}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Senior Tickets: {this.state.seniorTickets}</p>
          </div>
        </div>
      </>
    )
  }

  renderTotal() {
    let total = (this.state.adultTickets * 10.0) + (this.state.childTickets * 9) + (this.state.seniorTickets * 7)
    return (
      <>
        <div className='booking-total-info'>
          <div className='order-row'>
            <p className='booking-label'>Total (pre-discount): {total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}</p>
          </div>
        </div>
      </>
    )
  }



  goNext() {
    this.props.history.push({
      pathname: '/booking/order/checkout',
      state: {
        selectedShow: this.state.selectedShow,
        selectedMovie: this.state.selectedMovie,
        adultTickets: this.state.adultTickets,
        childTickets: this.state.childTickets,
        seniorTickets: this.state.seniorTickets,
        selectedSeats: this.state.selectedSeats,
        userProfile: this.state.userProfile
      }
    })
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='booking-container'>
          <div className='booking-header'>
            <h3 className='booking-title'>Order Summary</h3>
          </div>
          <div className='order-row'>
            {this.renderUser()}
          </div>
          <div className='order-row'>
            {this.renderMovie()}
          </div>
          <div className='order-row'>
            {this.renderShow()}
          </div>
          <div className='order-row'>
            {this.renderTickets()}
          </div>
          <div className='order-row'>
            {this.renderSeatNames()}
          </div>
          <div className='order-row'>
            {this.renderTotal()}
          </div>
          <div className='booking-buttons'>
            <button className='booking-submit' onClick={event => this.goNext()}>Next</button>
            <a type='button' className='booking-cancel' href={'/search'}>Cancel</a>
          </div>
        </div>
      </>
    )
  }
}

export default OrderSummaryComponent