import {Component} from 'react'
import {Container, Form} from 'react-bootstrap'
import './SearchResults.component.css'
import NavBar from '../NavBar/NavBar.component'
import {AiOutlineClose} from 'react-icons/ai'
import TrailerModal from './TrailerModal'

export class SearchResultsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      rating: 'N/A',
      category: 'N/A',
      movies: [],
      filterHelpText: '',
      showing: null,
    }

    this.getMovies = this.getMovies.bind(this)
    this.queryDB = this.queryDB.bind(this)
    this.renderMovies = this.renderMovies.bind(this)
  }

  async getMovies() {
    let query = 'http://localhost:8080/movies/search'
    if ((this.state.rating !== 'N/A') && (this.state.category !== 'N/A')) {
      query = `${query}/findAllByCategoryAndRating?category=${this.state.category}?rating=${this.state.rating}`
      this.setState({
        ...this.state,
        filterHelpText: 'Filtering by Category and Rating'
      })
    } else if (this.state.category !== 'N/A') {
      query = `${query}/findAllByCategory?category=${this.state.category}`
      this.setState({
        ...this.state,
        filterHelpText: 'Filtering by Category ' + this.state.category
      })
    } else if (this.state.rating !== 'N/A') {
      query = `${query}/findAllByRating?rating=${this.state.rating}`
      this.setState({
        ...this.state,
        filterHelpText: 'Filtering by Rating ' + this.state.rating
      })
    } else {
      this.setState({
        ...this.state,
        filterHelpText: 'No Filters Applied'
      })
      query = 'http://localhost:8080/movies'
    }
    console.log(query)
    let MoviesJSON = await this.queryDB(query)
    let movies = MoviesJSON._embedded.movies
    console.log(movies)
    this.setState({
      ...this.state,
      movies: movies
    })
  }

  renderMovies() {
    if (this.state.movies.length === 0) {
      return (
        <div className='no-results'>
          <h2>No movies came up!</h2>
        </div>
      )
    } else {
      return (
        <>
          {this.state.movies.map(m => {
            let render = false
            if (this.state.searchTerm.trim() !== '') {
              render = m.title.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim())
            } else if(this.state.showing !== null && m.showing !== this.state.showing) {
              render = false
            } else {
              render = true
            }

            if (render) {
              return (
                <section className='search-result-item' key={m.movieId}>
                  <TrailerModal trailerLink={m.trailerLink} trailerPhoto={m.trailerPhoto}/>
                  <div className='search-result-item-footer'>
                    <div className='search-result-item-info'>
                      <h2 className='grow-1'>{m.title.length > 30 ? `${m.title.substring(0, 30)}...` : m.title }</h2>
                      <h2>{m.rating}</h2>
                    </div>
                    <div className='search-result-item-buttons'>
                      <button disabled={!m.showing} onClick={e => {this.props.history.push(`/shows/movie=${m.movieId}`)}}>Book Tickets</button>
                      <button
                        onClick={e => {this.props.history.push('/movies/view/' + m.movieId)}}
                      >View Movie</button>
                    </div>
                  </div>
                </section>
              )
            } else {
              return null
            }
          })}
        </>
      )
    }
  }

  async queryDB(query) {
    return new Promise(function (resolve, reject) {
      fetch(query, {
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

  componentDidMount() {
    this.getMovies().then(response => {
      console.log('rendered movies')
    })
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className='spacer'/>
        <Container className='search-results'>
          <div className='header'>
            <div className='search-bar'>
              <Form.Control
                type={'text'}
                placeholder={'Search by Title'}
                className={'input-title'}
                onChange={e => this.setState({...this.state, searchTerm: e.target.value})}
                value={this.state.searchTerm}/>
              <button className={'search-button'} size={'lg'} onClick={e => this.getMovies()}>Search</button>
            </div>
            <div className='search-bar-buttons'>
              <div className='search-bar-button-group'>
                <button
                    className={`${this.state.showing === true ? 'button-active' : ''}`}
                    style={{width: '150px'}}
                    onClick={e => this.setState({...this.state, showing: true})}>Now Showing
                </button>
                <button
                    className={`${this.state.showing === false ? 'button-active' : ''}`}
                    style={{width: '150px'}}
                    onClick={e => this.setState({...this.state, showing: false})}>Coming Soon
                </button>
                <button
                    className={`${this.state.showing === null ? 'button-active' : ''}`}
                    onClick={e => this.setState({...this.state, showing: null})}>All
                </button>
              </div>
              <div className='search-bar-button-group'>
                <button
                  className={`${this.state.rating === 'G' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'G'})}>G
                </button>
                <button
                  className={`${this.state.rating === 'PG' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'PG'})}>PG
                </button>
                <button
                  className={`${this.state.rating === 'PG13' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'PG13'})}>PG-13
                </button>
                <button
                  className={`${this.state.rating === 'R' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'R'})}>R
                </button>
                <button
                  className={`${this.state.rating === 'NC17' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'NC17'})}>NC-17
                </button>
                <button
                  onClick={e => this.setState({...this.state, rating: 'N/A'})}><AiOutlineClose/></button>
              </div>
              <div className='search-bar-button-group'>
                <button
                  className={`${this.state.category === 'Action' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Action'})}>Action
                </button>
                <button
                  className={`${this.state.category === 'Drama' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Drama'})}>Drama
                </button>
                <button
                  className={`${this.state.category === 'Horror' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Horror'})}>Horror
                </button>
                <button
                  className={`${this.state.category === 'Romance' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Romance'})}>Romance
                </button>
                <button
                  className={`${this.state.category === 'Thriller' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Thriller'})}>Thriller
                </button>
                <button
                  className={`${this.state.category === 'Animation' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Animation'})}>Animation
                </button>
                <button
                  onClick={e => this.setState({...this.state, category: 'N/A'})}><AiOutlineClose/></button>
              </div>
            </div>
          </div>
          <div className='search-results-container'>
            {this.renderMovies()}
          </div>
        </Container>
      </>
    )
  }
}