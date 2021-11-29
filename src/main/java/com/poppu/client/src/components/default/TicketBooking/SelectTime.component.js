import React, {Component} from 'react'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'
import './SelectSeats.component.css'

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

    this.renderButtons = this.renderButtons.bind(this);
    this.getDate = this.getDate.bind(this);
    this.goNext = this.goNext.bind(this);
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
    })
  }

  getDate(timestamp){
    const milliseconds = timestamp
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString('en-US', {timeZone: 'EST'})
    return humanDateFormat
  }


  renderButtons(movieId){
    return this.state.shows.map(show => {
      return <>
        <button type="button"
                className={`select-time ${this.state.selectedShow === show ? 'active-time' : ''}`}
                name="dateTime"
                id="dateTime"
                onClick={event => this.setState({...this.state, selectedShow: show})}>
          {this.getDate((show.dateTime))}
        </button>
      </>
    });
  }

  render() {
    return (
        <Container className='my-3'>
          <Row>
            <h1>Ticket Selection</h1>
          </Row>
          <Row>
            <Form>
              <Card className='my-3'>
                <Card.Body>
                  <Form.Label>
                    <h2>Select Your Date and Time:</h2>
                      {this.renderButtons(this.state.movieId)}
                  </Form.Label>
                </Card.Body>
              </Card>
              <Card className='my-3'>
                <Card.Body>
                  <Form.Label>
                    Adult Tickets
                  </Form.Label>
                  <Form.Control type='number' placeholder='Adult Tickets' value={this.state.adultTickets} onChange={e => this.setState({...this.state, adultTickets: e.target.value})}/>
                  <Form.Label>
                    Child Tickets
                  </Form.Label>
                  <Form.Control type='number' placeholder='Child Tickets' value={this.state.childTickets} onChange={e => this.setState({...this.state, childTickets: e.target.value})}/>
                  <Form.Label>
                    Senior Tickets
                  </Form.Label>
                  <Form.Control type='number' placeholder='Senior Tickets' value={this.state.seniorTickets} onChange={e => this.setState({...this.state, seniorTickets: e.target.value})}/>
                </Card.Body>
              </Card>
              <Card className='my-3'>
                <Card.Body>
                  <Button className='mx-1' variant='primary' type='submit' onClick={event => this.goNext()}>Select
                    Seats</Button>
                  <Button className='mx-1' variant='danger' href={'/'}>Cancel</Button>
                </Card.Body>
              </Card>
            </Form>
          </Row>
        </Container>
    )
  }
}

export default Shows