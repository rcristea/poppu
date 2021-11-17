import React, {Component} from 'react'
import './Schedules.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import Alert from "../../Alerts/Alert";


class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shows: null,
    }

    this.getShows = this.getShows.bind(this)
    this.getEndTime = this.getEndTime.bind(this)
    this.renderShows = this.renderShows.bind(this)
    this.deleteShow = this.deleteShow.bind(this)
  }

  getEndTime(dateTime, duration) {
    let startTime = new Date(dateTime)
    let durationHours = parseInt(duration.substring(0,1))
    let durationMinutes = parseInt(duration.substring(3,5))
    let endTime = new Date(startTime)
    endTime.setHours(endTime.getHours() + durationHours)
    endTime.setMinutes(endTime.getMinutes() + durationMinutes)

    return endTime.toString()
  }

  getMovie(id) {
    return fetch(`http://localhost:8080/shows/${id}/movie`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json
        })
      } else {
        return null
      }
    }).catch(error => {
      return null
    })
  }

  getShows() {
    return fetch(`http://localhost:8080/shows`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(async(json) => {
          let shows = json._embedded.shows
          return shows
        })
      } else {
        console.error('getShows', response)
        return null
      }
    }).catch(error => {
      console.error('getShows', error)
      return null
    })
  }

  deleteShow(showID) {
    return e => {
      e.preventDefault()
      fetch(`/shows/${showID}`, {
        method: 'DELETE',
      });

      window.location.reload()
    }
  }

  renderAlert() {
    let alertSuccess = sessionStorage.getItem('alert-success')
    let alertError = sessionStorage.getItem('alert-error')

    if (alertSuccess) {
      sessionStorage.removeItem('alert-success')
      return (
        <Alert message={alertSuccess} type={'success'}/>
      )
    } else if (alertError) {
      sessionStorage.removeItem('alert-error')
      return (
        <Alert message={alertError} type={'error'}/>
      )
    } else {
      return null
    }
  }

  renderShows() {
    if (this.state.shows) {
      return this.state.shows.map(show => {
        let startTime = new Date(show.dateTime)
        let endTime = new Date(this.getEndTime(show.dateTime, show.movie.duration))

        return (
          <tr key={show.showID}>
            <td>{show.movie.title}</td>
            <td>{show.showroom.showroomId}</td>
            <td>{startTime.toLocaleString('en-US')}</td>
            <td>{endTime.toLocaleString('en-US')}</td>
            <td>
              <Dropdown className='card-table-dropdown'>
                <DropdownToggle
                  className='card-table-dropdown-button'><BiDotsVerticalRounded/></DropdownToggle>
                <DropdownMenu>
                  <form onSubmit={this.deleteShow(show.showID)}>
                    <button className='delete-schedule' type='submit'>Delete</button>
                  </form>
                </DropdownMenu>
              </Dropdown>
            </td>
          </tr>
        )
      })
    }
  }

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }

    let shows = await this.getShows()

    this.setState({
      shows: shows
    })

  }

  render() {
    return (
      <>
        <Sidebar />
        {this.renderAlert()}
        <div className='schedule-container'>
          <div className='cover'>
            <div className='schedule-card'>
              <div className='schedule-card-heading'>
                <div className='schedule-card-title'>
                  <h1>Movie Schedule</h1>
                  <a href='/schedule/add'>Add <BiPlus/></a>
                </div>
                <div className='schedule-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='schedule-card-content'>
                <Table responsive bordered className='schedule-card-table text-black'>
                  <thead>
                  <tr>
                    <th>Movie</th>
                    <th>Show Room</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                    {this.renderShows()}
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

export default Schedule