import { React, Component } from 'react'
import './PromoIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import SearchBar from '../SearchBar/SearchBar.component'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

class PromoIndex extends Component {
  constructor(props) {
    super(props)

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
      promos: promos,
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    return e => {
      e.preventDefault()
      alert('Attempted to delete promo with id: ' + id)
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
        <div className='promos-container'>
          <div className='cover'>
            <div className='promos-card'>
              <div className='promos-card-heading'>
                <div className='promos-card-title'>
                  <h1>Promotions</h1>
                  <a href='/promos/add'>Add <BiPlus /></a>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='promos-card-content'>
                <SearchBar />
                <Table responsive bordered className='promos-card-table text-black'>
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
                          <DropdownToggle className='card-table-dropdown-button'><BiDotsVerticalRounded /></DropdownToggle>

                          <DropdownMenu>
                            <DropdownItem href={`/promos/${promo.id}`}>View</DropdownItem>
                            <DropdownItem href={`/promos/edit/${promo.id}`}>Edit</DropdownItem>
                            <Dropdown.Divider />
                            <form onSubmit={this.handleDelete(promo.id)}>
                              <button className='delete-promo' type='submit'>Delete</button>
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

export default PromoIndex