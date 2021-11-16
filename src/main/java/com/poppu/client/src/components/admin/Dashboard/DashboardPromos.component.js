import React, {Component} from 'react'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

class DashboardPromos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      promos: null,
    }

    this.getPromos = this.getPromos.bind(this)
    this.renderPromos = this.renderPromos.bind(this)
  }

  getPromos() {
    return fetch(`http://localhost:8080/promotions/`, {
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

  renderPromos() {
    if (this.state.promos) {
      return this.state.promos.map(promo => (
        <tr key={promo.promotionId}>
          <td>{promo.promotionId}</td>
          <td>{promo.offer}</td>
          <td>
            <Dropdown className='card-table-dropdown'>
              <DropdownToggle><BiDotsVerticalRounded/></DropdownToggle>
              <DropdownMenu>
                <DropdownItem href={`/promos/view/${promo.promotionId}`}>View</DropdownItem>
                <DropdownItem href={`/promos/edit/${promo.promotionId}`}>Edit</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </td>
        </tr>
      ))
    }
  }

  async componentDidMount() {
    let promos = await this.getPromos()
    console.log(promos)
    this.setState({
      promos: promos._embedded.promotions,
    })
  }

  render() {
    return (
      <div className='dashboard-card'>
        <div className='dashboard-card-header'>
          <div className='left'>
            <h1>Manage Promotions</h1>
            <h3>View details, create, edit, and delete Promotions</h3>
          </div>
          <div className='right'>
            <a href='/promos/add'>Add <BiPlus/></a>
            <a href='/promos'>View All</a>
          </div>
        </div>
        <div className='dashboard-card-content'>
          <Table responsive bordered className={'text-black'}>
            <thead>
            <tr>
              <th>Code</th>
              <th>Amount</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            {this.renderPromos()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default DashboardPromos