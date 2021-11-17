import {Component} from 'react'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'

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
    };

    this.renderButtons = this.renderButtons.bind(this);
    this.getDate = this.getDate.bind(this);
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
      }
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
        <Button type="button"
                name="dateTime"
                id="dateTime"
                onClick={() => this.selectTime(show.showID)}>
          {this.getDate((show.dateTime))}
        </Button>{' '}
      </>
    });
  }

  selectTime() {
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
                    <h2>Select The Number of Tickets:</h2>
                  </Form.Label>
                  <Form.Control className='my-3' type='number' placeholder='Adult Tickets'/>
                  <Form.Control className='my-3' type='number' placeholder='Child Tickets'/>
                  <Form.Control className='my-3' type='number' placeholder='Senior Tickets'/>
                </Card.Body>
              </Card>
              <Card className='my-3'>
                <Card.Body>
                  <Button className='mx-1' variant='primary' type='submit' href={'/booking/seats'}>Select
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