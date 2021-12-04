import React, {Component} from 'react'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'

class DashboardSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: null,
    }

    this.getSchedule = this.getSchedule.bind(this)
    this.renderSchedule = this.renderSchedule.bind(this)
  }

  getSchedule() {
    return fetch(`http://localhost:8080/shows/`, {
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

  renderSchedule() {
    if (this.state.schedule) {
      return this.state.schedule.map(schedule => (
        <tr key={schedule.showID}>
          <td>{schedule.movie.title}</td>
          <td>{schedule.showroom.showroomId}</td>
          <td>{new Date(schedule.dateTime).toLocaleString('en-US')}</td>
          <td>
            <Dropdown className='card-table-dropdown'>
              <DropdownToggle><BiDotsVerticalRounded/></DropdownToggle>
            </Dropdown>
          </td>
        </tr>
      ))
    }
  }

  async componentDidMount() {
    let schedule = await this.getSchedule()
    this.setState({
      schedule: schedule._embedded.shows,
    })
  }

  render() {
    return (
      <div className='dashboard-card'>
        <div className='dashboard-card-header'>
          <div className='left'>
            <h1>Manage Schedule</h1>
            <h3>View details about the current schedule</h3>
          </div>
          <div className='right'>
            <a href='/schedule/add'>Add <BiPlus/></a>
            <a href='/schedule'>View All</a>
          </div>
        </div>
        <div className='dashboard-card-content'>
          <Table responsive bordered className={'text-black'}>
            <thead>
            <tr>
              <th>Movie</th>
              <th>Showroom</th>
              <th>Start Time</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.renderSchedule()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default DashboardSchedule