import React, {Component} from 'react'
import './Schedules.component.css'
import Sidebar from '../Sidebar/Sidebar.component'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

class Schedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [null, null,]
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className='schedule-container'>
          <div className='cover'>
            <div className='schedule-card'>
              <div className='schedule-card-heading'>
                <div className='schedule-card-title'>
                  <h1>Movie Schedule</h1>
                </div>
                <div className='schedule-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='schedule-card-content'>
                <Table responsive bordered className='schedule-card-table text-black'>
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Movie</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.movies.map(movie => (
                    <tr key={null}>TODO
                      <td>TODO</td>
                      <td>TODO</td>
                      <td>TODO</td>
                      <td>
                        <Dropdown className='card-table-dropdown'>
                          <DropdownToggle
                            className='card-table-dropdown-button'><BiDotsVerticalRounded/></DropdownToggle>

                          <DropdownMenu>
                            <DropdownItem href={`/`}>TODO</DropdownItem>
                            <DropdownItem href={`/`}>TODO</DropdownItem>
                            <Dropdown.Divider/>
                            <form onSubmit={null}>TODO
                              <button className='delete-schedule' type='submit'>TODO</button>
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

export default Schedule