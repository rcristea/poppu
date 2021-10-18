import { React, Component } from 'react'
import './Dashboard.component.css'
import Sidebar from '../Sidebar/Sidebar.component'
import { format } from 'date-fns'

import { BiDotsVerticalRounded, BiPlus } from 'react-icons/bi'
import { Table, Dropdown } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import 'bootstrap/dist/css/bootstrap.min.css'


class Dashboard extends Component {
  constructor(props) {
    super(props)

    const movies = [
      {
        'movie_id': 1,
        'movie_name': 'Shang-Chi',
        'movie_rating': 8.8,
        'movie_trailer_link': '8YjFbMbfXaQ',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 2,
        'movie_name': 'Uncle Frank',
        'movie_rating': 7.8,
        'movie_trailer_link': 'K8nm0iYLvcs',
        'showtime': '2021-01-02T02:00:00',
      },
      {
        'movie_id': 3,
        'movie_name': 'KATE',
        'movie_rating': 6.6,
        'movie_trailer_link': 'MysGjRS9jFU',
        'showtime': '2021-01-02T03:00:00',
      },
      {
        'movie_id': 4,
        'movie_name': 'Don\'t Breathe 2',
        'movie_rating': 8.2,
        'movie_trailer_link': 'gRbG2tjHYCA',
        'showtime': '2021-02-01T04:00:00',
      },
      {
        'movie_id': 5,
        'movie_name': 'Cinderella',
        'movie_rating': 1.5,
        'movie_trailer_link': '20DF6U1HcGQ',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 6,
        'movie_name': 'Red Dot',
        'movie_rating': 5.7,
        'movie_trailer_link': 't7FwypV69qc',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 7,
        'movie_name': 'After We Fell',
        'movie_rating': 5.4,
        'movie_trailer_link': 'NYdNN6C9hfI',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 8,
        'movie_name': 'SPIDER-MAN: NO WAY HOME',
        'movie_rating': 7.8,
        'movie_trailer_link': 'rt-2cxAiPJk',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 9,
        'movie_name': 'My Hero Academia: World Heroes\' Mission',
        'movie_rating': 6.6,
        'movie_trailer_link': '6cBYUfAno-0',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 10,
        'movie_name': 'The Matrix Ressurections',
        'movie_rating': 4.2,
        'movie_trailer_link': '9ix7TUGVYIo',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 11,
        'movie_name': 'Eternals',
        'movie_rating': 7.5,
        'movie_trailer_link': 'x_me3xsvDgk',
        'showtime': '2021-01-01T01:00:00',
      },
      {
        'movie_id': 12,
        'movie_name': 'SPIDER-MAN: INTO THE SPIDER-VERSE 2',
        'movie_rating': 9.7,
        'movie_trailer_link': 'HsX8pVqp_gg',
        'showtime': '2021-01-01T01:00:00',
      },
    ]

    const promos = [
      {
        'id': 1,
        'code': 'one',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 2,
        'code': 'two',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 3,
        'code': 'three',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      }
      ,
      {
        'id': 4,
        'code': 'four',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 5,
        'code': 'five',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 6,
        'code': 'six',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 7,
        'code': 'seven',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 8,
        'code': 'eight',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 9,
        'code': 'nine',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 10,
        'code': 'ten',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      }
    ]

    this.state = {
      movies: movies,
      promos: promos,
    }

    this.handleMovieDelete = this.handleMovieDelete.bind(this)
    this.handlePromoDelete = this.handlePromoDelete.bind(this)
    this.formatDateTime = this.formatDateTime.bind(this)
  }

  handleMovieDelete(movieID) {
    return e => {
      e.preventDefault()
      alert(`Delete method not implemented yet!\n Movie attempted to delete: ${movieID}`)
    }
  }

  handlePromoDelete(promoID) {
    return e => {
      e.preventDefault()
      alert(`Delete method not implemented yet!\n Promotion attempted to delete: ${promoID}`)
    }
  }

  formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString)

    return format(date, 'MMM dd, yy - p')
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className='dashboard-container'>
          <div className='dashboard-header'>
            <h1>Poppu Admin Dashboard</h1>
            <h3>Dashboard / Analytics</h3>
          </div>
          <div className='dashboard-card-container'>
            <div className='dashboard-card'>
              <div className='dashboard-card-header'>
                <div className='left'>
                  <h1>Manage Movies</h1>
                  <h3>View details, create, edit, and delete Movies</h3>
                </div>
                <div className='right'>
                  <a href='/movies/add'>Add <BiPlus /></a>
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
                    {this.state.movies.map(movie => (
                      <tr key={movie.movie_id}>
                        <td>{movie.movie_id}</td>
                        <td>{movie.movie_name}</td>
                        <td>{this.formatDateTime(movie.showtime)}</td>
                        <td>
                          <Dropdown className='card-table-dropdown'>
                            <DropdownToggle><BiDotsVerticalRounded /></DropdownToggle>

                            <DropdownMenu >
                              <DropdownItem href={`/movies/${movie.movie_id}`}>View</DropdownItem>
                              <DropdownItem href={`/movies/edit/${movie.movie_id}`}>Edit</DropdownItem>
                              <Dropdown.Divider />
                              <form onSubmit={this.handleMovieDelete(movie.movie_id)}>
                                <button type='submit'>Delete</button>
                              </form>
                            </DropdownMenu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className='dashboard-card'>
              <div className='dashboard-card-header'>
                <div className='left'>
                  <h1>Manage Promotions</h1>
                  <h3>View details, create, edit, and delete promotions</h3>
                </div>
                <div className='right'>
                  <a href='/promos/add'>Add <BiPlus /></a>
                  <a href='/promos'>View All</a>
                </div>
              </div>
              <div className='dashboard-card-content'>
                <Table responsive bordered className={'text-black'}>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Promo Code</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.promos.map(promo => (
                    <tr key={promo.id}>
                      <td>{promo.id}</td>
                      <td>{promo.code}</td>
                      <td>{promo.amount}</td>
                      <td>
                        <Dropdown className='card-table-dropdown'>
                          <DropdownToggle><BiDotsVerticalRounded /></DropdownToggle>

                          <DropdownMenu>
                            <DropdownItem href={`/promos/${promo.id}`}>View</DropdownItem>
                            <DropdownItem href={`/promos/edit/${promo.id}`}>Edit</DropdownItem>
                            <Dropdown.Divider />
                            <form onSubmit={this.handlePromoDelete(promo.id)}>
                              <button type='submit'>Delete</button>
                            </form>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard