import {Component} from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {postData} from "../Profile/methods";

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
      <Container className={'m-2 bg-info bg-opacity-10'}>
        <Row>
          <h2>Movie Information</h2>
        </Row>
        <Row>
          <Col md={4}>Movie</Col>
          <Col md={8}>{this.state.selectedMovie.title}</Col>
        </Row>
        <Row>
          <Col md={4}>Rating</Col>
          <Col md={8}>{this.state.selectedMovie.rating}</Col>
        </Row>
        <Row>
          <Col md={4}>Duration</Col>
          <Col md={8}>{this.state.selectedMovie.duration}</Col>
        </Row>
      </Container>
    )
  }

  renderShow() {
    return (
      <Container className={'m-2 bg-info bg-opacity-10'}>
        <Row>
          <h2>Show Information</h2>
        </Row>
        <Row>
          <Col md={4}>Show Date</Col>
          <Col md={8}>{new Date(this.state.selectedShow.dateTime).toLocaleDateString('en-US')}</Col>
        </Row>
        <Row>
          <Col md={4}>Show Time</Col>
          <Col md={8}>{new Date(this.state.selectedShow.dateTime).toLocaleTimeString('en-US')}</Col>
        </Row>
        <Row>
          <Col md={4}>Show Room</Col>
          <Col md={8}>{this.state.selectedShow.showroom.name}</Col>
        </Row>
      </Container>
    )
  }

  renderTickets() {
    return (
      <Container className={'m-2 bg-info bg-opacity-10'}>
        <Row>
          <h2>Ticket Information</h2>
        </Row>
        <Row>
          <Col md={4}>Adult Tickets: $10.00</Col>
          <Col md={8}>{this.state.adultTickets}</Col>
        </Row>
        <Row>
          <Col md={4}>Child Tickets: $9.00</Col>
          <Col md={8}>{this.state.childTickets}</Col>
        </Row>
        <Row>
          <Col md={4}>Senior Tickets: $8.00</Col>
          <Col md={8}>{this.state.seniorTickets}</Col>
        </Row>
      </Container>
    )
  }

  renderTotal() {
    let total = (this.state.adultTickets * 10.0) + (this.state.childTickets * 9) + (this.state.seniorTickets * 7)
    return (
      <Container className={'m-2 bg-info bg-opacity-10'}>
        <Row>
          <h4>Total: {total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}</h4>
        </Row>
      </Container>
    )
  }

  async theFinalFetch() {
    let bookingRequest = {
      movieTitle: this.state.selectedMovie.title,
      showDateTime: Date.now(),
      cardNum: parseInt(this.state.cardNum),
      userID: this.state.userProfile.id,
      promotionID: -1,
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
      <Container className={'my-2 bg-light'}>
        <Row>
          {this.renderMovie()}
        </Row>
        <Row>
          {this.renderShow()}
        </Row>
        <Row>
          {this.renderTickets()}
        </Row>
        <Row>
          {this.renderTotal()}
        </Row>
        <Row>
        </Row>
        <Row className={'mx-3'}>
          <Col md={4}><Button variant={'success'} href={'/'}>Back To Home</Button></Col>
        </Row>
        <Card className='my-2 btn-outline-success'>
          <Card.Title>
            <h2>Confirmation Email Sent!</h2>
          </Card.Title>
          <Card.Body>
            <Row>
              {this.renderUser()}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default OrderConfirmationComponent