import React, {Component} from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {postData} from "../Profile/methods";
import NavBar from "../NavBar/NavBar.component";

export class OrderConfirmationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.history.location.state
    console.log(this.state)

    this.renderTotal = this.renderTotal.bind(this)
    this.renderTickets = this.renderTickets.bind(this)
    this.renderShow = this.renderShow.bind(this)
    this.renderMovie = this.renderMovie.bind(this)
    this.renderUser = this.renderUser.bind(this)

    this.theFinalFetch = this.theFinalFetch.bind(this)
  }

  componentDidMount() {
    this.theFinalFetch()
  }

  renderUser() {
    if (this.state.userProfile) {
      return (
        <Container className={'m-2 bg-info bg-opacity-10'}>
          <Row>
            <h2>User Information</h2>
          </Row>
          <Row>
            <Col md={4}>First Name</Col>
            <Col md={8}>{this.state.userProfile.firstName}</Col>
          </Row>
          <Row>
            <Col md={4}>Last Name</Col>
            <Col md={8}>{this.state.userProfile.lastName}</Col>
          </Row>
          <Row>
            <Col md={4}>ID</Col>
            <Col md={8}>{this.state.userProfile.id}</Col>
          </Row>
          <Row>
            <Col md={4}>Email</Col>
            <Col md={8}>{this.state.userProfile.email}</Col>
          </Row>
        </Container>
      )
    }
  }

  renderMovie() {
    return (
      <>
        <div className='booking-info'>
          <div className='booking-subtitle'>Movie Info</div>
          <div className='order-row'>
            <p className='booking-label'>Movie: {this.state.selectedMovie.title}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Rating: {this.state.selectedMovie.rating}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Movie: {this.state.selectedMovie.duration}</p>
          </div>
        </div>
      </>
    )
  }

  renderShow() {
    return (
      <>
        <div className='booking-info'>
          <div className='booking-subtitle'>Show Info</div>
          <div className='order-row'>
            <p className='booking-label'>Show
              Date: {new Date(this.state.selectedShow.dateTime).toLocaleDateString('en-US')}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Show
              Time: {new Date(this.state.selectedShow.dateTime).toLocaleTimeString('en-US')}</p>
          </div>
          <div className='order-row'>
            <p className='booking-label'>Showroom: {this.state.selectedShow.showroom.name}</p>
          </div>
        </div>
      </>
    )
  }

  renderTickets() {
    return (
      <>
        <div className='booking-info'>
          <div className='booking-subtitle'>Ticket Info</div>
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
    let salesTax = total * 0.07
    let onlineFee = 1.50
    let promoDiscount = this.state.selectedPromo.offer
    let final_total = total - (parseInt(this.state.selectedPromo.offer.replaceAll('$', '').trim())) + salesTax + onlineFee
    return (
      <div className='order-total'>
        <p className='booking-label'>
          <Row>
            <Col>Total:</Col>
            <Col>{total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}</Col>
          </Row>

        </p>
        <p className='booking-label'>
          <Row>
            <Col>Promo offer:</Col>
            <Col>{promoDiscount} saved!</Col>
          </Row>
        </p>
        <p className='booking-label'>
          <Row>
            <Col>Sales Tax:</Col>
            <Col>{salesTax.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}</Col>
          </Row>
        </p>
        <p className='booking-label'>
          <Row>
            <Col>Online Fees:</Col>
            <Col>{onlineFee.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}</Col>
          </Row>
        </p>
        <h4 className={'mt-2'}>
          <Row>
            <Col>Subotal:</Col>
            <Col>{final_total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}</Col>
          </Row>
        </h4>
      </div>
    )
  }

  async theFinalFetch() {
    let bookingRequest = {
      movieTitle: this.state.selectedMovie.title,
      showDateTime: Date.now(),
      cardNum: parseInt(this.state.cardNum),
      userID: this.state.userProfile.id,
      promotionID: this.state.selectedPromo.promotionId,
      showID: this.state.selectedShow.showID,
      showroomID: this.state.selectedShow.showroom.showroomId,
      seats: this.state.selectedSeats,
      adultTickets: this.state.adultTickets,
      childTickets: this.state.childTickets,
      seniorTickets: this.state.seniorTickets,
    }

    let bookingRes = await postData(bookingRequest, 'http://localhost:8080/api/booking/book')
    console.log(bookingRequest)
    console.log(bookingRes)
    this.setState({
      ...this.state,
      bookingResponse: bookingRes
    })
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className='booking-container'>
          <div className='booking-header'>
            <h3 className='booking-title'>Booking Confirmation</h3>
          </div>
          <div className='order-row'>
            <p className='order-success'>Confirmation email sent!</p>
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
            {this.renderTotal()}
          </div>
          <div className='booking-buttons'>
            <a href='/search' className='booking-submit'>Return to movies</a>
          </div>
        </div>
      </>
      //   </Row>
      //   <Row className={'mx-3'}>
      //     <Col md={4}><Button variant={'success'} href={'/'}>Back To Home</Button></Col>
      //   </Row>
      //   <Card className='my-2 btn-outline-success'>
      //     <Card.Title>
      //       <h2>Confirmation Email Sent!</h2>
      //     </Card.Title>
      //     <Card.Body>
      //       <Row>
      //         {this.renderUser()}
      //       </Row>
      //     </Card.Body>
      //   </Card>
      // </Container>
    )
  }
}

export default OrderConfirmationComponent