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
        rating_code: "",
        rating: "",
        trailer_photo: "",
        trailer_link: "",
        is_showing: "",
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

  movie_title = 'SPIDER-MAN: INTO THE SPIDER-VERSE 2'
  movie_year = 2021
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
        rating: movie.rating,
        rating_code: movie.rating_code,
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
          <h1 className={'flex-grow-1'}>{this.state.movie.title}</h1>
          <Row>
            <ul className={'px-4 bg-light'}>
              <h5 style={{color: 'blueviolet'}}>{this.formatYear()}</h5>
              <h5 style={{color: 'blueviolet'}}>{this.movie_data.movie_age_rating}</h5>
              <h5 style={{color: 'blueviolet'}}>1h 30 min</h5>
            </ul>
          </Row>
          <Row>
            <ListGroup horizontal className={'bg-black'}>
              <ListGroupItem className={'bg-black'}>
                <img src={`${process.env.PUBLIC_URL}/assets/img/posters/spider_man_into_the_spider_verse_2.jpeg`} alt={`Spiderman poster`}
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