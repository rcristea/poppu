import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import ReviewCard from "../../../utils/ReviewCard.component";
import AutoCard from '../../../utils/AutoCard.component'
import AutoList from '../../../utils/AutoList.component'
import {CardSubtitle, CardText, CardTitle} from "reactstrap";
import NavBar from "../../../default/NavBar/NavBar.component";

export class ViewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: this.props.match.params.id,
        title: "",
        date: "",
        category: "",
        director: "",
        producer: "",
        synopsis: "",
        score: "",
        trailerPhoto: "",
        trailerLink: "",
        isShowing: "",
        duration: "",
        rating: "",
      },
      shows: [],
    }
    this.getData = this.getData.bind(this)
    this.getShowTimes = this.getShowTimes.bind(this)
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

  getShowModels() {
    return fetch(`http://localhost:8080/shows`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getShowModels', json._embedded.shows)
          return json._embedded.shows
        })
      } else {
        console.error('getShowModels', response)
        return null
      }
    }).catch(error => {
      console.error('getShowModels', error)
      return null
    })
  }

  comment_id = 1
  comment_title = 'This movie sucks'
  comment_rating = 5.9
  comment_description = 'I really hated this goddamn movie. It is a piece of shit.'

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
    let movie = await this.getData()
    let shows = await this.getShowTimes()
    this.setState({
      movie: {
        id: this.state.movie.id,
        title: movie.title,
        date: movie.date,
        category: movie.category,
        producer: movie.producer,
        director: movie.director,
        synopsis: movie.synopsis,
        score: movie.score,
        trailerPhoto: movie.trailerPhoto,
        trailerLink: movie.trailerLink,
        isShowing: movie.isShowing,
        duration: movie.duration,
        rating: movie.rating,
      },
      shows: shows,
    })
  }

  formatYear() {
    return this.state.movie.date.substr(0, 4)
  }

  formatYoutubeLink() {
    return "https://www.youtube.com/embed/" + this.state.movie.trailerLink;
  }

  getShowTimes() {
    return fetch(`http://localhost:8080/shows/`)
        .then(response => {
          return response.json().then(json => {
            return json
          })
        }).catch(error => {
          console.log(error)
        })
  }

  //use {JSON.stringify(this.state)} to look at all the data being passed in
  render() {
    return (
        <>
          <NavBar/>
          <div className={'spacer'}/>
          <Container className={'my-2'} style={{background: '#171717', border: 0}}>
            <div className={'d-flex'}>
              <h1 className={'flex-grow-1'} style={{color: 'blueviolet'}}>{this.state.movie.title}</h1>
              <h2 style={{color: 'deeppink'}}>{this.state.movie.score} / 10</h2>
            </div>
            <ListGroup horizontal className={'pb-2'} style={{background: '#171717'}}>
              <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.formatYear()}</h5></ListGroupItem>
              <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.state.movie.rating}</h5></ListGroupItem>
              <ListGroupItem><h5 style={{color: 'blueviolet'}}>{this.state.movie.duration}</h5>
              </ListGroupItem>
            </ListGroup>
            <Row>
              <ListGroup horizontal style={{background: '#171717'}}>
                <ListGroupItem style={{background: '#171717', border: 0}}>
                  <img src={`${process.env.PUBLIC_URL}/${this.state.movie.trailerPhoto}`}
                       alt={'Movie Poster'}
                       width={'350px'} height={'518px'}/>
                </ListGroupItem>
                <ListGroupItem className={"ratio ratio-16x9"} style={{background: '#171717'}}>
                  <iframe id="youtubeVid"
                          src={this.formatYoutubeLink()}
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>
                </ListGroupItem>
              </ListGroup>
            </Row>
            <Row style={{background: '#171717'}}>
              <Card style={{background: '#171717', border: 0}}>
                <Card.Title style={{color: 'fuchsia', background: '#171717'}}>SHOWTIMES</Card.Title>
                <Card.Text>
                  <ListGroup horizontal>
                    <ShowTimeComponent/>
                    <ListGroupItem>STILL NEED TO IMPLEMENT</ListGroupItem>
                  </ListGroup>
                </Card.Text>
              </Card>
            </Row>
            <Card style={{background: '#171717'}}>
              <Card.Body>
                <ListGroup>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>{this.state.movie.category}</ListGroupItem>
                      <ListGroupItem>{this.state.movie.isShowing ? 'Now Showing' : 'Coming Soon'}</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Card.Text className="mb-2 p-3">
                      {this.state.movie.synopsis}
                    </Card.Text>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>Director</ListGroupItem>
                      <ListGroupItem>{this.state.movie.director}</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>Producer</ListGroupItem>
                      <ListGroupItem>{this.state.movie.producer}</ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroup horizontal>
                      <ListGroupItem>
                        Cast
                      </ListGroupItem>
                      <ListGroupItem>
                        hi
                      </ListGroupItem>
                    </ListGroup>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card className={'w-75'} border="secondary" style={{background: '#171717'}}>
              <h2 style={{color: 'slateblue'}} className={'mt-1 px-3'}>Reviews</h2>
              <ReviewCard
                  comment_key={this.comment_id}
                  comment_title={this.comment_title}
                  comment_rating={this.comment_rating}
                  comment_description={this.comment_description}
              />
            </Card>
          </Container>
        </>
    )
  }
}

class ShowTimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_time: "",
    }
  }

  formatTime() {

  }

  render() {
    return (
        <>
          <div className={'m-3 p-2 border rounded-pill border-1 text-white'}>3:30pm</div>
        </>
    )
  }
}