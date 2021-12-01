import React, {Component} from 'react'
import {MdOutlineChair} from 'react-icons/md'
import './SelectSeats.component.css'
import NavBar from "../NavBar/NavBar.component";


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

  toggleSeat(e, seatAvailabilityId) {
    let totalTickets = parseInt(this.state.adultTickets) + parseInt(this.state.childTickets) + parseInt(this.state.seniorTickets)

    if (this.state.selectedSeats.includes(seatAvailabilityId)) {
      e.currentTarget.classList.remove('selected-seat')

      let index = this.state.selectedSeats.indexOf(seatAvailabilityId)
      if (index !== -1) {
        this.state.selectedSeats.splice(index, 1)
      }
    } else if (totalTickets === this.state.selectedSeats.length) {
      return
    } else {
      e.currentTarget.classList.add('selected-seat')

      this.state.selectedSeats.push(seatAvailabilityId)
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

        let color = '#fff'
        if (!seat.available) {
          color = '#898989'
        } else if (this.state.selectedSeats && this.state.selectedSeats.includes(seat.id)) {
          color = '#685ed4'
        }

        return (
          <div className='seat' key={seat.seat.seatId}
               onClick={seat.available ? (e) => this.toggleSeat(e, seat.seat.seatId) : null}>
            <div className='seat-icon'>
              <MdOutlineChair size={'50px'} color={color}/>
            </div>
            <div className='seat-name' style={{'color': color}}>
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
      <>
        <NavBar/>
        <div className='booking-container'>
          <div className='booking-header'>
            <h3 className='booking-title'>Select Seats</h3>
          </div>
          <div className='select-seats'>
            <div className='screen'>
              <img src={`${process.env.PUBLIC_URL}/assets/img/selectSeats/screen.png`}
                   alt={'Screen'}
                   width={'100%'}
                   className='screen-img'/>
            </div>
            <div className='seats'>
              {this.renderSeats()}
            </div>
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

export default SelectSeatComponent