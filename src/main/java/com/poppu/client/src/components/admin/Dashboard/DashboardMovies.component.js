import React, {Component} from 'react'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

class DashboardMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
    }

    this.getMovies = this.getMovies.bind(this)
    this.renderMovies = this.renderMovies.bind(this)
  }

  getMovies() {
    return fetch(`http://localhost:8080/movies/`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json
        })
      } else {
        return response
      }
    }).catch(error => {
      return error
    })
  }

  renderMovies() {
    if (this.state.movies) {
      return this.state.movies.map(movie => (
        <tr key={movie.movieId}>
          <td>{movie.movieId}</td>
          <td>{movie.title}</td>
          <td>{new Date(movie.date).toLocaleString('en-US')}</td>
          <td>
            <Dropdown className='card-table-dropdown'>
              <DropdownToggle><BiDotsVerticalRounded/></DropdownToggle>
              <DropdownMenu>
                <DropdownItem href={`/movies/view/${movie.movieId}`}>View</DropdownItem>
                <DropdownItem href={`/movies/edit/${movie.movieId}`}>Edit</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </td>
        </tr>
      ))
    }
  }

  async componentDidMount() {
    let movies = await this.getMovies()
    this.setState({
      movies: movies._embedded.movies,
    })
  }

  render() {
    return (
      <div className='dashboard-card'>
        <div className='dashboard-card-header'>
          <div className='left'>
            <h1>Manage Movies</h1>
            <h3>View details, create, edit, and delete Movies</h3>
          </div>
          <div className='right'>
            <a href='/movies/add'>Add <BiPlus/></a>
            <a href='/movies'>View All</a>
          </div>
        </div>
        <div className='dashboard-card-content'>
          <Table responsive bordered className={'text-black'}>
            <thead>
            <tr>
              <th>ID</th>
              <th>Movie Name</th>
              <th>Show Time</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.renderMovies()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default DashboardMovies