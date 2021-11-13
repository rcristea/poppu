import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import ReviewCard from "../../../utils/ReviewCard.component";
import AutoCard from '../../../utils/AutoCard.component'
import AutoList from '../../../utils/AutoList.component'
import {CardSubtitle, CardText, CardTitle} from "reactstrap";

export class ViewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie : {
        id: this.props.match.params.id,
        title : "",
        date : "",
        category: "",
        director: "",
        producer: "",
        synopsis: "",
        score: "",
        trailerPhoto: "",
        trailer_link: "",
        is_showing: "",
        duration: "",
        rating: "",
      }
    }

    this.getData = this.getData.bind(this)
  }

  getData() {
    return fetch(`http://localhost:8080/movies/${this.state.movie.id}`, {
      method: 'GET',
    }).then(response => {
      return response.json().then(json => {
        return json
      })
    }).catch(error => {
      console.log(error)
    })
  }

  comment_id = 1
  comment_title = 'This movie sucks'
  comment_rating = 5.9
  comment_description = 'I really hated this goddamn movie. It is a piece of shit.'

  movie_data = {
    'movie_id': 12,
    'movie_name': 'SPIDER-MAN: INTO THE SPIDER-VERSE 2',
    'movie_description': 'The untitled Spider-Man: Into the Spider-Verse sequel is an upcoming American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel, and distributed by Sony Pictures',
    'movie_rating': 9.7,
    'movie_trailer_link': 'HsX8pVqp_gg',
    'movie_age_rating': 'PG-13',
  }
  showtime_data = [
    {
      'show_date': '10/02/2021',
      'show_time': '4:30 pm'
    },
    {
      'show_date': '10/03/2021',
      'show_time': '4:30 pm'
    },
    {
      'show_date': '10/04/2021',
      'show_time': '4:30 pm'
    },
    {
      'show_date': '10/05/2021',
      'show_time': '4:30 pm'
    },
    {
      'show_date': '10/05/2021',
      'show_time': '6:00 pm'
    },
  ]

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
    let movie = await this.getData()
    this.setState({
      movie : {
        id: this.state.movie.id,
        title : movie.title,
        date : movie.date,
        category: movie.category,
        producer: movie.producer,
        director: movie.director,
        synopsis: movie.synopsis,
        score: movie.score,
        trailerPhoto: movie.trailerPhoto,
        trailer_video: movie.trailer_video,
        is_showing: movie.is_showing,
        duration: movie.duration,
        rating: movie.rating,
      }
    })
  }

  formatYear() {
    return this.state.movie.date.substr(0,4)
  }

  render() {
    return (
        <Container className={'my-2 bg-light'}>
          {JSON.stringify(this.state)}
          <div className={'d-flex'}>
            <h1 className={'flex-grow-1'} style={{color: 'blueviolet'}}>{this.state.movie.title}</h1>
            <h2 style={{color: 'deeppink'}}>{this.state.movie.score} / 10</h2>
          </div>
          <ListGroup horizontal className={'pb-2 bg-black'}>
            <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.formatYear()}</h5></ListGroupItem>
            <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.state.movie.rating}</h5></ListGroupItem>
            <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.state.movie.duration}</h5></ListGroupItem>
          </ListGroup>
          <Row>
            <ListGroup horizontal className={'bg-black'}>
              <ListGroupItem className={'bg-black'}>
                <img src={`${process.env.PUBLIC_URL}/${this.state.movie.trailerPhoto}`} alt={'Movie Poster'}
                     width={'350px'} height={'518px'}/>
              </ListGroupItem>
              <ListGroupItem className={"ratio ratio-16x9 bg-black"}>
                <iframe src="https://www.youtube.com/embed/YevtAMcy2cA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </ListGroupItem>
            </ListGroup>
          </Row>
          <Row>
            <Card>
              <Card.Title>SHOWTIMES</Card.Title>
              <Card.Text>
                <ListGroup horizontal>
                  <ListGroupItem>hi</ListGroupItem>
                  <ListGroupItem>hi</ListGroupItem>
                </ListGroup>
              </Card.Text>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem>
                    <ul>
                      Category
                      |
                      Status
                    </ul>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Card.Text className="mb-2 p-3">
                      {this.movie_data.movie_description}
                    </Card.Text>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>Director</ListGroupItem>
                      <ListGroupItem>John Doe</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>Producer</ListGroupItem>
                      <ListGroupItem>John Doe</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>
                        Cast
                      </ListGroupItem>
                      <ListGroupItem>
                        John Doe, John Doe, John Doe, John Doe,...
                      </ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
                <ReviewCard
                    comment_key={this.comment_id}
                    comment_title={this.comment_title}
                    comment_rating={this.comment_rating}
                    comment_description={this.comment_description}
                />
          </Row>
        </Container>


/*
      <Container className={'my-2'}>
        <Row>
          <AutoCard component_title={this.movie_title} component_data={this.movie_data}/>
        </Row>
        <Row>
          <AutoList component_title={'Show Times'} component_data={this.showtime_data}/>
        </Row>
        <Row className={'mx-3'}>
          <Col md={4}><Button variant={'warning'}>Edit Movie</Button></Col>
          <Col md={4}><Button variant={'success'} href={'/movies'}>Back to Movies</Button></Col>
          <Col md={4}><Button variant={'danger'} href={'/movies'}>Delete Movie</Button></Col>
        </Row>
      </Container>
*/
    )
  }
}