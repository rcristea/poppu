import 'react-bootstrap/'
import {Component} from 'react'
import {Card, Container, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import ReviewCard from "../../../utils/ReviewCard.component";
import NavBar from "../../../default/NavBar/NavBar.component";
import {format} from "date-fns";

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
      shows: [{
        dateTime: "",
      }],
      reviews: [{
        id: "",
        title: "",
        rating: "",
        description: "",
      }],
      cast: [{
        actor: "",
      }],
    }
    this.getMovie = this.getMovie.bind(this);
    this.getShows = this.getShows.bind(this);
    this.initContent = this.initContent.bind(this);
    this.filterShows = this.filterShows.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getCast = this.getCast.bind(this)
  }

  getCast() {
    return fetch(`http://localhost:8080/movieActors?size=300`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json._embedded.movieactors
        })
      } else {
        console.error('getMovieActors', response)
        return null
      }
    }).catch(error => {
      console.error('getMovieActors', error)
      return null
    })
  }

  getMovie() {
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

  getReviews() {
    return fetch(`http://localhost:8080/reviews`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json._embedded.reviews
        })
      } else {
        console.error('getReviews', response)
        return null
      }
    }).catch(error => {
      console.error('getReviews', error)
      return null
    })
  }

  getShows() {
    return fetch(`http://localhost:8080/shows`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
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

  filterShows(shows) {
    return shows.filter(show => show.movie.movieId == this.props.match.params.id)
  }

  filterReviews(reviews) {
    return reviews.filter(review => review.movie.movieId == this.props.match.params.id)
  }

  filterCast(cast) {
    return cast.filter(movieActor => movieActor.movie.movieId == this.props.match.params.id).map(movieactor => movieactor.actor)
  }

  async initContent() {
    let movie = await this.getMovie(this.props.match.params.id)
    let shows = await this.getShows(this.props.match.params.id)
    let reviews = await this.getReviews(this.props.match.params.id)
    let cast = await this.getCast(this.props.match.params.id)
    console.log(movie, shows, reviews, cast)
    shows = this.filterShows(shows)
    reviews = this.filterReviews(reviews)
    console.log('before filter', cast)
    cast = this.filterCast(cast)
    console.log('after filter', cast)
    this.setState({
      movie: movie,
      shows: shows,
      reviews: reviews,
      cast: cast,
    })
  }

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
    await this.initContent()
  }

  formatYear() {
    return this.state.movie.date.substr(0, 4)
  }

  formatYoutubeLink() {
    return "https://www.youtube.com/embed/" + this.state.movie.trailerLink;
  }

  renderCast() {
    if (this.state.cast) {
      let result = ""
      this.state.cast.map(actor => {
        result += actor.firstName + " " + actor.lastName + ", "
      })
      return result.substr(0, result.length - 2)
    }
    return null
  }

  renderShows() {
    if (this.state.shows) {
      return this.state.shows.map(show => {
        const startTime = new Date(show.dateTime)
        let formattedStartTime = startTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit',})
        return <ShowTimeComponent time={formattedStartTime}/>
      })
    }
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
              <ListGroupItem className={'border-0 border-end'} style={{background: '#171717'}}>
                <h5 style={{color: 'blueviolet'}}>{this.formatYear()}</h5>
              </ListGroupItem>
              <ListGroupItem style={{background: '#171717'}} className={'border-0 border-end'}>
                <h5 style={{color: 'blueviolet'}}>{this.state.movie.rating}</h5>
              </ListGroupItem>
              <ListGroupItem style={{background: '#171717'}} className={'border-0'}>
                <h5 style={{color: 'blueviolet'}}>{this.state.movie.duration}</h5>
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
                <Card.Title style={{color: 'fuchsia', background: '#171717'}} className={'mt-3'}>SHOWTIMES</Card.Title>
                <Card.Text>
                  <ListGroup horizontal>
                    {this.renderShows()}
                  </ListGroup>
                </Card.Text>
              </Card>
            </Row>
            <Row style={{background: '#171717'}} className={"m-1"}>
              <ListGroup horizontal className={"border-bottom border-info rounded-0"}>
                <ListGroupItem className={"text-primary border-0"} style={{background: '#171717'}}>{this.state.movie.category}</ListGroupItem>
                <ListGroupItem className={"text-white border-0"} style={{background: '#171717'}}>{this.state.movie.isShowing ? 'Now Showing' : 'Coming Soon'}</ListGroupItem>
              </ListGroup>
              <Card.Text className="mb-2 p-3 text-white">
                {this.state.movie.synopsis}
              </Card.Text>
              <ListGroup horizontal>
                <ListGroupItem>Director</ListGroupItem>
                <ListGroupItem>{this.state.movie.director}</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroupItem>Producer</ListGroupItem>
                <ListGroupItem>{this.state.movie.producer}</ListGroupItem>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroupItem>
                  Cast
                </ListGroupItem>
                <ListGroupItem>
                  {this.renderCast()}
                </ListGroupItem>
              </ListGroup>
            </Row>
            <Card className={'w-75'} border="secondary" style={{background: '#171717'}}>
              <h2 style={{color: 'slateblue'}} className={'mt-1 px-3'}>Reviews</h2>
              {this.state.reviews.map(review => {
                return <ReviewCard
                    comment_key={review.id}
                    comment_title={review.title}
                    comment_rating={review.rating}
                    comment_description={review.description}
                />
              })}
            </Card>
          </Container>
        </>
    )
  }
}

class ShowTimeComponent extends Component {
  render() {
    return (
        <>
          <div className={'m-3 p-2 border rounded-pill border-1 text-white'}>{this.props.time}</div>
        </>
    )
  }
}