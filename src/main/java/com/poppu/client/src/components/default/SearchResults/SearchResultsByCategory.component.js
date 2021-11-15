import {Component} from "react";
import NavBar from "../NavBar/NavBar.component";
import {Button, Card, Container, Form, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";

export class SearchResultsByCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: this.props.match.params.category,
      movies: [{
        movieId: null,
        title: "",
        rating: "",
        trailerPhoto: "",
      },]
    }
    this.getMoviesByCategory = this.getMoviesByCategory.bind(this)
  }

  async componentDidMount() {
    console.log(this.props.match.params.category)
    let movies = await this.getMoviesByCategory(this.state.searchQuery)
    console.log(movies)
    let formattedMovies = []
    movies.forEach(movie => {
      formattedMovies.push({
        movieId: movie.movie_id,
        movieName: movie.title,
        movieRating: movie.rating,
        moviePhoto: movie.trailerPhoto,
      })
    })
    formattedMovies.slice(1, formattedMovies.length)
    this.setState({
      searchQuery: this.state.searchQuery,
      movies: formattedMovies,
    })
  }

  getMoviesByCategory(category) {
    return fetch(`http://localhost:8080/api/movies/category?category=${category}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          return json
        })
      } else {
        console.error('getMoviesByCategory', response)
        return null
      }
    }).catch(error => {
      console.error('getMoviesByCategory', error)
      return null
    })
  }

  render() {
    return (
        <>
          <NavBar/>
          <div className={'spacer'}>
            <Container className={'my-5'}>
              <MovieForm/>
              <Card className={'my-3 p-3'}>Based on your search for: {this.state.searchResults}</Card>
              {this.state.movies.map(movie => {
                return (
                    <MovieLayout trailerPhoto={movie.trailerPhoto} movieId={movie.movie_id} title={movie.title}
                                 rating={movie.rating}/>
                )
              })}
            </Container>
          </div>
        </>
    )
  }
}

class MovieLayout extends Component {
  render() {
    return (
        <div style={{width: '18rem'}}>
          <a className={'text-decoration-none'}
             href={`/movies/${this.props.movieId}`}>
            <Card style={{width: '18rem', background: '#171717'}} className={'border-0'}>
              <Card.Img variant="top"
                        src={`${process.env.PUBLIC_URL}/${this.props.trailerPhoto}`}/>
              <Card.Title>
                <ListGroup horizontal>
                  <ListGroupItem className={'flex-md-grow-1 border-0 text-white'}
                                 style={{background: '#171717'}}>{this.props.title}</ListGroupItem>
                  <ListGroupItem className={'border-0 text-white'}
                                 style={{background: '#171717'}}>{this.props.rating}</ListGroupItem>
                </ListGroup>
              </Card.Title>
            </Card>
          </a>
        </div>
    )
  }
}

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    }
  }

  handleInputChanged(event) {
    event.preventDefault();
    this.setState({
      searchQuery: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchQuery = this.state.searchQuery;
    window.location.href = "http://localhost:3000/search/movies/" + searchQuery;
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <ListGroup horizontal>
            <FormControl
                type={"input"}
                placeholder={"Enter movie"}
                value={this.state.searchQuery}
                onChange={this.handleInputChanged.bind(this)}/>
            <Button variant="light" onClick={this.handleSubmit.bind(this)}>Search</Button>
          </ListGroup>
        </Form>
    )
  }
}