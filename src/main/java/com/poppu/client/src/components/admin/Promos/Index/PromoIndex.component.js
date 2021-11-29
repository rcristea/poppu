import React, {Component} from 'react'
import './PromoIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import Alert from '../../Alerts/Alert'
import {BiDotsVerticalRounded, BiPlus} from 'react-icons/bi'
import {Dropdown, Table} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

class PromoIndex extends Component {
  constructor(props) {
    super(props);

    /* Matching the state of the indexer to the shape of the promotions table. */
    this.state = {
      promotions: [{
        promotion_id: "", //bigint
        end_time: "", //datetime
        is_sent: false, //tinyint(1)
        offer: "", //varchar(255)
        start_time: "", //datetime
      },]
    }
    /* Binds methods to the class */
    this.handleDelete = this.handleDelete.bind(this)
    this.logOut = this.logOut.bind(this)
    this.renderAlert = this.renderAlert.bind(this)
    this.getPromotions = this.getPromotions.bind(this)
  }

  getPromotions() {
    return fetch('http://localhost:8080/promotions/', {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getPromotions', json._embedded.promotions)
          return json._embedded.promotions
        })
      } else {
        console.error('getPromotions', response)
        return null
      }
    }).catch(error => {
      console.error('getPromotions', error)
      return null
    })
  }

  handleDelete(id) {
    return e => {
      e.preventDefault()
      fetch('http://localhost:8080/promotions/' + id, {method: 'DELETE'})
        .then(() => this.setState({status: 'Delete successful'}))
        .then(window.location.reload(false))

    }
  }

  logOut() {
    if (localStorage.getItem('remember_me')) {
      localStorage.removeItem('remember_me')
    }

    if (sessionStorage.getItem('user_email')) {
      sessionStorage.removeItem('user_email')
    }

    if (sessionStorage.getItem('role')) {
      sessionStorage.removeItem('role')
      sessionStorage.setItem('alert', 'Successfully logged out!')

      this.props.history.push('/')
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

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    } else {
      let promotions = await this.getPromotions()
      let formattedPromotions = []
      console.log(promotions[0])
      promotions.forEach(promotion => {
        formattedPromotions.push({
          promotionId: promotion.promotionId,
          endTime: new Date(promotion.endTime).toLocaleString('en-US'),
          isSent: promotion.isSent,
          offer: promotion.offer,
          startTime: new Date(promotion.startTime).toLocaleString('en-US'),
        })
      })
      //formattedPromotions.slice(1, formattedPromotions.length)
      this.setState({
        promotions: formattedPromotions,
      })
      console.log(formattedPromotions)
    }
  }


  render() {
    return (
      <>
        <Sidebar logOut={this.logOut}/>
        {this.renderAlert()}
        <div className='promos-container'>
          <div className='cover'>
            <div className='promos-card'>
              <div className='promos-card-heading'>
                <div className='promos-card-title'>
                  <h1>Promotions</h1>
                  <a href='/promos/add'>Add <BiPlus/></a>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='promos-card-content'>
                <Table responsive bordered className='promos-card-table text-black'>
                  <thead>
                  <tr>
                    <th>Promotion ID</th>
                    <th>Offer</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>

                  {this.state.promotions.map(promo => (
                    <tr key={promo.promotionId}>
                      <td>{promo.promotionId}</td>
                      <td>{promo.offer}</td>
                      <td>{promo.startTime}</td>
                      <td>{promo.endTime}</td>
                      <td>
                        <Dropdown className='card-table-dropdown'>
                          <DropdownToggle
                            className='card-table-dropdown-button'><BiDotsVerticalRounded/></DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem href={`/promos/${promo.promotionId}`}>View</DropdownItem>
                            <DropdownItem href={`/promos/edit/${promo.promotionId}`}>Edit</DropdownItem>
                            <Dropdown.Divider/>
                            <form onSubmit={this.handleDelete(promo.promotionId)}>
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