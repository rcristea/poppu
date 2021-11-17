import {Component} from 'react'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'

class Shows extends Component{

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
    }

    async componentDidMount(){
        this.getShows(this.props.match.params.id)
    }

     async getShows(movieId) {
        let res = await fetch(`http://localhost:3000/api/shows/`);
        const shows = await res.json();
        console.log(shows);

        res = await fetch(`http://localhost:8080/movies/${movieId}`);
        const movie = await res.json();
        console.log(movie);

         this.state = {
             shows: [],
             movie: {
                 movieId: movie.movieId,
                 title: movie.title,
                 rating: movie.rating,
                 trailerPhoto: movie.trailerPhoto,
             }
         };
    }

    selectTime(){
    }

    render(){
        const {shows} = this.state;
        const {showButtons} = shows.map(show => {
            return <Button type="button"
                           name="dateTime"
                           id="dateTime"
                           onClick={() => this.selectTime()}>
                {show.dateTime}
            </Button>
        });

        return(
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
                                    <Card className='my-3'>
                                        {showButtons}
                                    </Card>
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
                                <Button className='mx-1' variant='primary' type='submit' href={'/booking/seats'}>Select Seats</Button>
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