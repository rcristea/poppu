import {Component} from 'react'
import {Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import AutoTable from '../../../utils/AutoTable.component'
import 'bootstrap/dist/css/bootstrap.min.css'

export class ManageMoviesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [{
          id: null,
          movie_name: "",
          movie_rating: "",
          movie_ratingCode: "",
          movie_showing: "",
        },]
    }
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies() {
    return fetch(`http://localhost:8080/movies/`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json._embedded.movies
        })
      } else {
        console.error('getMovies', response)
        return null
      }
    }).catch(error => {
      console.error('getMovies', error)
      return null
    })
  }

  async componentDidMount() {
    let movies = await this.getMovies()
    let formattedMovies = []
    movies.forEach(movie => {
      formattedMovies.push({
        id: movie.movieId,
        movieName: movie.title,
        movieRating: movie.score,
        movieRatingCode: movie.rating,
        movieIsShowing: movie.showing,
      })
    })
    formattedMovies.slice(1, formattedMovies.length)
    this.setState({
      movies: formattedMovies,
    })
    console.log('movies', this.state.movies)
  }

  render() {
    return (
      <Container>
        <Row className={'my-3'}>
          <h1>Manage Movies</h1>
        </Row>
        <AutoTable
          card_title={'Movies'}
          headings={'id,movie_name,movie_rating,movie_rating_code,status,'}
          widths={[1, 5, 1, 1, 2]}
          table_data={this.state.movies}
          viewable={true}
          deletable={true}
          addable={true}
        />
      </Container>
    )
  }
}