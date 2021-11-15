import {Component} from "react";
import NavBar from "../NavBar/NavBar.component";
import {Button, Card, CardGroup, Container, Form, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import {CardTitle} from "reactstrap";

export class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: this.props.match.params.title,
      isFound: "",
      movie: {
        movieId: null,
        title: "",
        rating: "",
        trailerPhoto: "",
      }
    }
    this.getMovieByTitle = this.getMovieByTitle.bind(this)
  }

  async componentDidMount() {
    let movie = await this.getMovieByTitle(this.state.searchResults)
    this.setState({
          searchResults: this.state.searchResults,
          isFound: true,
          movie: {
            movieId: movie.movieId,
            title: movie.title,
            rating: movie.rating,
            trailerPhoto: movie.trailerPhoto,
          }
        }
    )
  }

  getMovieByTitle(title) {
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/api/movies/title?title=${title}`, {
        method: 'GET',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
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
              <div style={{width: '18rem'}}>
                <a className={'text-decoration-none'}
                   href={`/movies/${this.state.movie.movieId}`}>
                  <Card style={{width: '18rem', background: '#171717'}} className={'border-0'}>
                    <Card.Img variant="top"
                              src={`${process.env.PUBLIC_URL}/${this.state.movie.trailerPhoto}`}/>
                    <Card.Title>
                      <ListGroup horizontal>
                        <ListGroupItem className={'flex-md-grow-1 border-0 text-white'}
                                       style={{background: '#171717'}}>{this.state.movie.title}</ListGroupItem>
                        <ListGroupItem className={'border-0 text-white'}
                                       style={{background: '#171717'}}>{this.state.movie.rating}</ListGroupItem>
                      </ListGroup>
                    </Card.Title>
                  </Card>
                </a>
              </div>
            </Container>
          </div>
        </>
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