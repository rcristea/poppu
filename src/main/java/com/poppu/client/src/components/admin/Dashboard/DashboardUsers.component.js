import React, {Component} from 'react'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

class DashboardUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    }

    this.getUsers = this.getUsers.bind(this)
    this.renderUsers = this.renderUsers.bind(this)
  }

  getUsers() {
    return fetch(`http://localhost:8080/users/`, {
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

  renderUsers() {
    if (this.state.users) {
      return this.state.users.map(user => (
        <tr key={user.userId}>
          <td>{user.firstName} {user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td>
            <Dropdown className='card-table-dropdown'>
              <DropdownToggle><BiDotsVerticalRounded/></DropdownToggle>
              <DropdownMenu>
                <DropdownItem href={`/users/view/${user.userId}`}>View</DropdownItem>
                <DropdownItem href={`/users/edit/${user.userId}`}>Edit</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </td>
        </tr>
      ))
    }
  }

  async componentDidMount() {
    let users = await this.getUsers()
    this.setState({
      users: users._embedded.users,
    })
  }

  render() {
    return (
      <div className='dashboard-card'>
        <div className='dashboard-card-header'>
          <div className='left'>
            <h1>Manage Users</h1>
            <h3>View details, create, edit, and delete Users</h3>
          </div>
          <div className='right'>
            <a href='/users'>View All</a>
          </div>
        </div>
        <div className='dashboard-card-content'>
          <Table responsive bordered className={'text-black'}>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {this.renderUsers()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default DashboardUsers