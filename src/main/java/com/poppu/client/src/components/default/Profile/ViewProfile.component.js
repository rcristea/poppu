import React, {Component} from 'react'
import {Button, Card, Container, Dropdown, DropdownButton} from 'react-bootstrap'

import 'react-bootstrap/'
import {AddressComponent, DisplayAttribute, PaymentInfoComponent, TitleComponent} from "./Utils.component";
import './methods'
import {deleteAssociation, getAddress, getPaymentCards, getUser} from "./methods";
import NavBar from "../NavBar/NavBar.component";

import './profile.component.css'
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {FiSettings} from 'react-icons/fi'
import DropdownItem from "react-bootstrap/DropdownItem";

export class ViewProfileComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      address: null,
      paymentCards: null,
      orders: null,
    }

    this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
    this.handleAddAddressClick = this.handleAddAddressClick.bind(this)
    this.handleDeleteAddressClick = this.handleDeleteAddressClick.bind(this)
    this.handleAddPaymentClick = this.handleAddPaymentClick.bind(this)
    this.handleEditPasswordClick = this.handleEditPasswordClick.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderAddress = this.renderAddress.bind(this)
    this.renderOrders = this.renderOrders.bind(this)
    this.initContent = this.initContent.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  async initContent() {
    let email = sessionStorage.getItem('user_email')
    let user = await getUser(email)
    console.log(111, user)
    let orders = await fetch(`http://localhost:8080/api/booking/getByUser/${user.id}`, {
      method: 'GET',
    }).then(response => {
      return response.json().then(json => {
        return json
      })
    }).catch(error => {
      console.log(error)
    })
    console.log('initContent', orders, user)

    let address_link = user._links.address.href
    let address = await getAddress(address_link).catch(error => {
      return null
    })

    let paymentCards_link = user._links.paymentCards.href
    let paymentCards = await getPaymentCards(paymentCards_link)
    let paymentinfos = paymentCards._embedded.paymentinfos

    for (var i = 0; i < paymentinfos.length; i++) {
      let paymentAddressLink = paymentinfos[i]._links.address.href
      paymentinfos[i].address = await getAddress(paymentAddressLink)
    }

    await this.setState({
      user: user,
      address: address,
      paymentCards: paymentCards._embedded.paymentinfos,
      orders: orders,
    })
  }

  logOut() {
    if (localStorage.getItem('remember_me')) {
      localStorage.removeItem('remember_me')
    }

    if (sessionStorage.getItem('user_email')) {
      sessionStorage.removeItem('user_email')
    }

    sessionStorage.setItem('role', 'user')
    if (sessionStorage.getItem('role')) {
      sessionStorage.removeItem('role')
      sessionStorage.setItem('alert', 'Successfully logged out!')

      this.props.history.push('/')
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'user') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }

    this.initContent()
  }

  handleEditProfileClick() {
    this.props.history.push({
      pathname: '/profile/edit',
      state: {user: this.state.user}
    })
  }

  handleEditPasswordClick() {
    this.props.history.push({
      pathname: '/profile/edit/password',
      state: {user: this.state.user}
    })
  }

  handleAddAddressClick() {
    if (this.state.address === null) {
      this.props.history.push({
        pathname: '/address/add',
        state: {user: this.state.user}
      })
    } else {
      alert("User already has address! Edit it.")
    }
  }

  async handleDeleteAddressClick() {
    if (this.state.address === null) {
      alert("User doesn't have an address! Create one.")
    } else {
      await deleteAssociation(this.state.user._links.address.href)
      this.props.history.push({
        pathname: '/profile'
      })
      window.location.reload();
    }
  }


  handleAddPaymentClick() {
    if (this.state.paymentCards.length >= 3) {
      alert("Cannot add more payment methods!")
    } else {
      this.props.history.push({
        pathname: '/payment/add',
        state: {user: this.state.user}
      })
    }
  }

  renderAddress() {
    if (this.state.address) {
      return (
        <>
          <div className='profile-header'>
            <h4 className='profile-title'>Address</h4>
          </div>
          <div className='profile-item'>
            <p className='grow'>Street:</p>
            <p>{this.state.address.street}</p>
          </div>
          <div className='profile-item'>
            <p className='grow'>City:</p>
            <p>{this.state.address.city}</p>
          </div>
          <div className='profile-item'>
            <p className='grow'>Zipcode:</p>
            <p>{this.state.address.zipCode}</p>
          </div>
        </>
      )
    } else {
      return null
    }
  }

  renderOrders() {
    if (this.state.orders.length !== 0) {
      return (
        <>
          <div className='orders'>
            {this.state.orders.map(order => {
              return (
                <>
                  <div className='order mb-5'>
                    <div className='profile-item'>
                      <p className='grow'>Booking Number</p>
                      <p>{order.bookingNum}</p>
                    </div>
                    <div className='profile-item'>
                      <p className='grow'>Movie Title</p>
                      <p>{order.movieTitle}</p>
                    </div>
                    <div className='profile-item'>
                      <p className='grow'>Order Date</p>
                      <p>{new Date(order.showDateTime).toDateString('en-US')}</p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </>
      )
    } else {
      return (
        <>
          <p>No Orders Placed</p>
        </>
      )
    }
  }

  renderContent() {
    let addressButton = null
    if (this.state.address) {
      addressButton = <DropdownItem onClick={() => {
        console.log(this.state)
        this.props.history.push({
          pathname: '/address/edit',
          state: {address: this.state.address},
        })
      }}>Edit Address</DropdownItem>
    } else {
      addressButton = <DropdownItem onClick={this.handleAddAddressClick}>Add Address</DropdownItem>
    }

    if (this.state.user) {
      return (
        <>
          <div className='profile-container'>
            <div className='profile-left'>
              <div className='profile-header'>
                <h3 className='profile-title'>{this.state.user.firstName}'s Profile</h3>
                <Dropdown className='profile-dropdown grow'>
                  <DropdownToggle><FiSettings color={'#fff'} size={'25px'}/></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={this.handleEditProfileClick}>Edit Profile</DropdownItem>
                    {addressButton}
                    <DropdownItem onClick={this.handleDeleteAddressClick}>Delete Address</DropdownItem>
                    <DropdownItem onClick={this.handleAddPaymentClick}>Add Payment Method</DropdownItem>
                    <DropdownItem onClick={this.handleEditPasswordClick}>Change Password</DropdownItem>
                    <DropdownItem onClick={this.logOut}>Log Out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className='profile-content'>
                <div className='profile-item'>
                  <p className='grow'>First Name:</p>
                  <p>{this.state.user.firstName}</p>
                </div>
                <div className='profile-item'>
                  <p className='grow'>Last Name:</p>
                  <p>{this.state.user.lastName}</p>
                </div>
                <div className='profile-item'>
                  <p className='grow'>Email:</p>
                  <p>{this.state.user.email}</p>
                </div>
                <div className='profile-item'>
                  <p className='grow'>Phone Number:</p>
                  <p>{this.state.user.phoneNum}</p>
                </div>
                <div className='profile-item'>
                  <p className='grow'>Promotion Subscription:</p>
                  <p>{this.state.user.isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p>
                </div>
              </div>
              <div className='profile-address'>
                {this.renderAddress()}
              </div>
              <div className='profile-payments'>
                {this.state.paymentCards.map(paymentCard => {
                  return (
                    <div className='profile-payment-method' key={paymentCard.cardNum}>
                      <PaymentInfoComponent paymentInfo={paymentCard} user={this.state.user} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='profile-right'>
              <div className='profile-header'>
                <h4 className='profile-title'>Order History</h4>
              </div>
              <div className='profile-body'>
                {this.renderOrders()}
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }
  }

  render() {
    return (
      <>
        <NavBar/>
        <div style={{marginTop: 150 + 'px'}}>
          {this.renderContent()}
        </div>
      </>
    )
  }
}

export {TitleComponent, DisplayAttribute}
export default ViewProfileComponent