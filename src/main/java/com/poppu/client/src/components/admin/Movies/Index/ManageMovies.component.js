import React, {Component} from 'react'
import 'react-bootstrap/'
import AutoTable from '../../../utils/AutoTable.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BiPlus} from "react-icons/bi";

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
      <div className='movies-card'>
        <div className='movies-card-heading'>
          <div className='movies-card-title'>
            <h1>Movies</h1>
            <a href='/movies/add'>Add <BiPlus/></a>
          </div>
          <div className='movies-card-subtitle'>
            <h3>For more options, click the three dots on the right.</h3>
          </div>
        </div>
        <div className='movies-card-content'>
          <AutoTable
            headings={'id,movie_name,movie_rating,movie_rating_code,status,'}
            widths={[1, 5, 1, 1, 2]}
            table_data={this.state.movies}
            viewable={true}
            deletable={true}
            addable={true}
          />
        </div>
      </div>
    )
  }
}