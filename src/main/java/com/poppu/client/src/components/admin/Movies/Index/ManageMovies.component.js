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
          movie_isShowing: "",
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
          console.log('getMovies', json._embedded.movies)
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
    console.log(movies[1])
    movies.forEach(movie => {
      formattedMovies.push({
        id: movie.movie_id,
        movieName: movie.title,
        movieRating: movie.score,
        movieRatingCode: movie.rating,
        movieIsShowing: movie.isShowing,
      })
    })
    formattedMovies.slice(1, formattedMovies.length)
    this.setState({
      movies: formattedMovies,
    })
    console.log(formattedMovies)
  }

  formatMovies() {

  }
  movies = [
    {
      'id': 1,
      'movie_name': 'Shang-Chi',
      'movie_rating': 8.8,
      'movie_trailer_link': '8YjFbMbfXaQ',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 2,
      'movie_name': 'Uncle Frank',
      'movie_rating': 7.8,
      'movie_trailer_link': 'K8nm0iYLvcs',
      'showtime': '2021-01-02T02:00:00',
    },
    {
      'id': 3,
      'movie_name': 'KATE',
      'movie_rating': 6.6,
      'movie_trailer_link': 'MysGjRS9jFU',
      'showtime': '2021-01-02T03:00:00',
    },
    {
      'id': 4,
      'movie_name': 'Don\'t Breathe 2',
      'movie_rating': 8.2,
      'movie_trailer_link': 'gRbG2tjHYCA',
      'showtime': '2021-02-01T04:00:00',
    },
    {
      'id': 5,
      'movie_name': 'Cinderella',
      'movie_rating': 1.5,
      'movie_trailer_link': '20DF6U1HcGQ',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 6,
      'movie_name': 'Red Dot',
      'movie_rating': 5.7,
      'movie_trailer_link': 't7FwypV69qc',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 7,
      'movie_name': 'After We Fell',
      'movie_rating': 5.4,
      'movie_trailer_link': 'NYdNN6C9hfI',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 8,
      'movie_name': 'SPIDER-MAN: NO WAY HOME',
      'movie_rating': 7.8,
      'movie_trailer_link': 'rt-2cxAiPJk',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 9,
      'movie_name': 'My Hero Academia: World Heroes\' Mission',
      'movie_rating': 6.6,
      'movie_trailer_link': '6cBYUfAno-0',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 10,
      'movie_name': 'The Matrix Ressurections',
      'movie_rating': 4.2,
      'movie_trailer_link': '9ix7TUGVYIo',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 11,
      'movie_name': 'Eternals',
      'movie_rating': 7.5,
      'movie_trailer_link': 'x_me3xsvDgk',
      'showtime': '2021-01-01T01:00:00',
    },
    {
      'id': 12,
      'movie_name': 'SPIDER-MAN: INTO THE SPIDER-VERSE 2',
      'movie_rating': 9.7,
      'movie_trailer_link': 'HsX8pVqp_gg',
      'showtime': '2021-01-01T01:00:00',
    },
  ]

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
          editable={true}
          deletable={true}
          addable={true}
        />
      </Container>
    )
  }
}