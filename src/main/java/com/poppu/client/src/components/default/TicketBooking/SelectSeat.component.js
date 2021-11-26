import {Component} from 'react'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'
import {MdOutlineChair} from 'react-icons/md'
import './SelectSeats.component.css'


export class SelectSeatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.history.location.state


    this.goNext = this.goNext.bind(this)
    this.renderSeats = this.renderSeats.bind(this)
    this.toggleSeat = this.toggleSeat.bind(this)
  }

  getShowsWithShowID(showID) {
    return fetch(`http://localhost:8080/api/seatAvailabilities/show/${showID}`, {
      method: 'GET',
    })
  }

  goNext() {
    this.props.history.push({
      pathname: '/booking/order/summary',
      state: {
        selectedShow: this.state.selectedShow,
        selectedMovie: this.state.selectedMovie,
        adultTickets: this.state.adultTickets,
        childTickets: this.state.childTickets,
        seniorTickets: this.state.seniorTickets,
        selectedSeats: this.state.selectedSeats,
      }
    })
  }

  toggleSeat(e, seatId) {
    if (this.state.selectedSeats.includes(seatId)) {
      e.currentTarget.classList.remove('selected-seat')

      let index = this.state.selectedSeats.indexOf(seatId)
      if (index !== -1) {
        this.state.selectedSeats.splice(index, 1)
      }
    } else {
      e.currentTarget.classList.add('selected-seat')

      this.state.selectedSeats.push(seatId)
    }
  }

  async componentDidMount() {
    let seats = await this.getShowsWithShowID(this.state.selectedShow.showID).then(response => {
      return response.json().then(json => {
        return json
      })
    })

    this.setState({
      ...this.state,
      seats: seats,
      selectedSeats: [],
    })
  }

  renderSeats() {
    if (this.state.seats) {
      return this.state.seats.map(seat => {
        // To test if seat availability
        // if (Math.random() < 0.5) {
        //   seat.available = false
        // }

        let color = '#000'
        if (!seat.available) {
          color = '#eaeaea'
        } else if (this.state.selectedSeats && this.state.selectedSeats.includes(seat.seat.seatId)) {
          color = '#72e3e3'
        }

        return (
          <div className='seat' key={seat.seat.seatId} onClick={seat.available ? (e) => this.toggleSeat(e, seat.seat.seatId) : null}>
            <div className='seat-icon'>
              <MdOutlineChair size={'50px'} color={color}/>
            </div>
            <div className='seat-name'>
              {seat.seat.seat}
            </div>
          </div>
        )
      })
    } else {
      return null
    }
  }

  render() {
    return (
      <Container className='my-3'>
        <Row>
          <h1>Seat Selection</h1>
        </Row>
        <Row>
          <Form>
            <Card className='my-3'>
              <Card.Body>
                <img src={`${process.env.PUBLIC_URL}/assets/img/selectSeats/screen.png`}
                     alt={'Screen'}
                     width={'100%'}/>
                <div className='seats'>
                  {this.renderSeats()}
                </div>
              </Card.Body>
            </Card>
            <Card className='my-3'>
              <Card.Body>
                <Button className='mx-1' variant='primary'
                        onClick={event => this.goNext()}>Next</Button>
                <Button className='mx-1' variant='danger' href={'/'}>Cancel</Button>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </Container>
    )
  }
}

export default SelectSeatComponent