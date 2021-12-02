import React, {Component} from 'react'
import {Container, Row} from 'react-bootstrap'
import './SelectSeats.component.css'
import NavBar from '../NavBar/NavBar.component'

class Shows extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shows: [{
        showID: null,
        dateTime: null,
        movie: null,
        showroom: null,
      },],
      movie: {
        movieId: null,
        title: "",
        rating: "",
        trailerPhoto: "",
      },
      selectedShow: null,
      selectedMovie: null,
      adultTickets: 0,
      childTickets: 0,
      seniorTickets: 0,
    };

    this.renderButtons = this.renderButtons.bind(this)
    this.getDate = this.getDate.bind(this);
    this.goNext = this.goNext.bind(this);
    this.renderPrices = this.renderPrices.bind(this)
  }

  goNext() {
    this.props.history.push({
      pathname: '/booking/seats',
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

  async componentDidMount() {
    this.getShows(this.props.match.params.id)
  }

  async getShows(movieId) {
    let res = await fetch(`http://localhost:8080/movies/${movieId}`);
    const movie = await res.json();
    console.log(movie);

    res = await fetch(`/api/shows/byMovie/${movieId}`);
    const shows = await res.json();
    console.log(shows);

    this.setState({
      shows: shows,
      movie: {
        movieId: movie.movieId,
        title: movie.title,
        rating: movie.rating,
        trailerPhoto: movie.trailerPhoto,
      },
      selectedMovie: movie,
      selectedShow: shows[0],
    })
  }

  getDate(timestamp) {
    const milliseconds = timestamp
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString('en-US', {timeZone: 'EST'})
    return humanDateFormat
  }

  onShowChange = e => {
    const selected = e.target.value;
    this.setState({
      ...this.state,
      selectedShow: selected,
    })

    console.log(this.state)
  }


  renderButtons(movieId) {
    return this.state.shows.map(show => {
      return (
        <button type="button"
                className={`select-time ${this.state.selectedShow === show ? 'active-time' : ''}`}
                name="dateTime"
                id="dateTime"
                onClick={event => this.setState({...this.state, selectedShow: show})}>
          {this.getDate((show.dateTime))}
        </button>
      )
    });
  }

  renderPrices() {
    return (
      <Container>
        <Row className={'m-2'}>Prices</Row>
        <Row className={'m-2'}>Adult Tickets: $10.00</Row>
        <Row className={'m-2'}>Child Tickets: $9.00</Row>
        <Row className={'m-2'}>Senior Tickets: $8.00</Row>
      </Container>
    )
  }

  render() {
    return (
      <>
        <NavBar />
        <div className='booking-container'>
          <div className='booking-header'>
            <h3 className='booking-title'>Book Tickets</h3>
          </div>
          <div className='show-times'>
            <p className='booking-label'>Show Time: </p>
            {this.renderButtons(this.state.movieId)}
          </div>
          <div className='tickets'>
            <div className='ticket-row'>
              <p className='booking-label'>Adult Tickets: </p>&nbsp;&nbsp;&nbsp;&nbsp;
              <input className='ticket-amount' type='number' value={this.state.adultTickets} onChange={e => this.setState({...this.state, adultTickets: e.target.value})}/>
            </div>
            <div className='ticket-row'>
              <p className='booking-label'>Child Tickets: </p>&nbsp;&nbsp;&nbsp;&nbsp;
              <input className='ticket-amount' type='number' value={this.state.childTickets} onChange={e => this.setState({...this.state, childTickets: e.target.value})}/>
            </div>
            <div className='ticket-row'>
              <p className='booking-label'>Senior Tickets: </p>&nbsp;
              <input className='ticket-amount' type='number' value={this.state.seniorTickets} onChange={e => this.setState({...this.state, seniorTickets: e.target.value})}/>
            </div>
          </div>
          <div className='booking-buttons'>
            <button className='booking-submit' onClick={event => this.goNext()}>Select Seats</button>
            <a type='button' className='booking-cancel' href={'/search'}>Cancel</a>
          </div>
        </div>
      </>
    )
  }
}

export default Shows