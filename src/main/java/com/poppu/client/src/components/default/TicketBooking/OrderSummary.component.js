import {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {getData, getSeats, getUser} from "../Profile/methods";

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
        <Container className={'m-2 bg-info bg-opacity-10'}>
          <Row>
            <h2>Seats Selected</h2>
          </Row>
          <Row>
            {this.state.seatNames.map(seatName => {
              return (
                <Row className={'mx-4'}><strong>{seatName}</strong></Row>
              )
            })}
          </Row>
        </Container>
      )
    } else {
      return (
        <Container>

        </Container>
      )
    }
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
          <h4>Total (pre-discount): {total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}</h4>
        </Row>
      </Container>
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
      <Container className={'my-2 bg-light'}>
        <Row>
          {this.renderUser()}
        </Row>
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
          {this.renderSeatNames()}
        </Row>
        <Row>
          {this.renderTotal()}
        </Row>
        <Row>
        </Row>
        <Row className={'mx-3'}>
          <Col md={4}><Button variant={'success'} onClick={() => this.goNext()}>Proceed To
            Checkout</Button></Col>
          <Col md={4}><Button variant={'danger'} href={'/'}>Cancel</Button></Col>
        </Row>
      </Container>
    )
  }
}

export default OrderSummaryComponent