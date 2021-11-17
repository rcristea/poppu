import {Component} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import './SearchResults.component.css'
import NavBar from '../NavBar/NavBar.component'
import {AiOutlineClose} from 'react-icons/ai'


export class SearchResultsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      rating: 'N/A',
      category: 'N/A',
      movies: [],
      filterHelpText: '',
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
        <Row className={'m-2 bg-info bg-opacity-10'}>
          <Row className={'m-2 bg-opacity-25'}>
            <Col>

            </Col>
            <Col>
              <h4><strong>Title</strong></h4>
            </Col>
            <Col>
              <h4>Date Released</h4>
            </Col>
            <Col>
              <h4>Synopsis</h4>
            </Col>
            <Col>
              <h4>Category</h4>
            </Col>
            <Col>
              <h4>Rating</h4>
            </Col>
          </Row>
          {this.state.movies.map(m => {
            let render = false
            let showingText = ''
            if (m.showing) {
              showingText = 'Now Showing'
            } else {
              showingText = 'Coming Soon'
            }
            if (this.state.searchTerm.trim() !== '') {
              if (m.title.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim())) {
                render = true
              } else {
                render = false
              }
            } else {
              render = true
            }

            if (render) {
              return (
                <Row key={m.movieId} className={'m-2 bg-opacity-25'}>
                  <Col>
                    <Card.Img variant="top"
                              src={`${process.env.PUBLIC_URL}/${m.trailerPhoto}`}/>
                    <div>
                      <h4>{showingText}</h4>
                    </div>
                  </Col>
                  <Col>
                    <strong><h3>{m.title}</h3></strong>
                  </Col>
                  <Col>
                    <Col>
                      {m.date}
                    </Col>
                    <Col>
                      {m.duration}
                    </Col>
                  </Col>
                  <Col>
                    {m.synopsis}
                  </Col>
                  <Col>
                    <h3>{m.category}</h3>
                  </Col>
                  <Col>
                    <h3>{m.rating}</h3>
                  </Col>
                  <div>
                    <Button disabled={!m.showing}>✎ Book Tickets</Button>
                  </div>
                  <div>
                    <Button variant={"success"} onClick={e => {
                      this.props.history.push('/movies/view/' + m.movieId)
                    }}>View Movie</Button>
                  </div>
                </Row>
              )
            } else {
              return null
            }
          })}
        </Row>
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

  render() {
    return (
      <>
        <NavBar />
        <div className='spacer' />
        <Container className='search-results'>
          <div className='header'>
            <div className='search-bar'>
              <Form.Control
                type={'text'}
                placeholder={'Search by Title'}
                className={'input-title'}
                onChange={e => this.setState({...this.state, searchTerm: e.target.value})}
                value={this.state.searchTerm} />
              <button className={'search-button'} size={'lg'} onClick={e => this.getMovies()}>Search</button>
            </div>
            <div className='search-bar-buttons'>
              <div className='search-bar-button-group'>
                <p className='search-bar-button-group-heading'>Rating</p>
                <button
                  className={`${this.state.rating === 'G' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'G'})}>G</button>
                <button
                  className={`${this.state.rating === 'PG' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'PG'})}>PG</button>
                <button
                  className={`${this.state.rating === 'PG13' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'PG13'})}>PG-13</button>
                <button
                  className={`${this.state.rating === 'R' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'R'})}>R</button>
                <button
                  className={`${this.state.rating === 'NC17' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, rating: 'NC17'})}>NC-17</button>
                <button
                  onClick={e => this.setState({...this.state, rating: 'N/A'})}><AiOutlineClose /></button>
              </div>
              <div className='search-bar-button-group'>
                <p className='search-bar-button-group-heading'>Category</p>
                <button
                  className={`${this.state.category === 'Action' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Action'})}>Action</button>
                <button
                  className={`${this.state.category === 'Drama' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Drama'})}>Drama</button>
                <button
                  className={`${this.state.category === 'Horror' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Horror'})}>Horror</button>
                <button
                  className={`${this.state.category === 'Romance' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Romance'})}>Romance</button>
                <button
                  className={`${this.state.category === 'Thriller' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Thriller'})}>Thriller</button>
                <button
                  className={`${this.state.category === 'Animation' ? 'button-active' : ''}`}
                  onClick={e => this.setState({...this.state, category: 'Animation'})}>Animation</button>
                <button
                  onClick={e => this.setState({...this.state, category: 'N/A'})}><AiOutlineClose /></button>
              </div>
            </div>
          </div>
          <Row>
            {this.renderMovies()}
          </Row>
        </Container>
      </>
    )
  }
}