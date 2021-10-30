import {Component} from 'react'
import {Button, Card, Container} from 'react-bootstrap'

import 'react-bootstrap/'
import {AddressComponent, DisplayAttribute, PaymentInfoComponent, TitleComponent} from "./Utils.component";
import './methods'
import {deleteAssociation, getAddress, getPaymentCards, getUser} from "./methods";
import NavBar from "../NavBar/NavBar.component";

export class ViewProfileComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      address: null,
      paymentCards: null,
    }

    this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
    this.handleAddAddressClick = this.handleAddAddressClick.bind(this)
    this.handleDeleteAddressClick = this.handleDeleteAddressClick.bind(this)
    this.handleAddPaymentClick = this.handleAddPaymentClick.bind(this)
    this.handleEditPasswordClick = this.handleEditPasswordClick.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderAddress = this.renderAddress.bind(this)
    this.initContent = this.initContent.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  async initContent() {
    let email = sessionStorage.getItem('user_email')
    let user = await getUser(email)

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
        <AddressComponent compTitle={'Your Address'} address={this.state.address}/>
      )
    } else {
      return null
    }
  }

  renderContent() {
    if (this.state.user) {
      return (
        <Container className={'my-2 bg-light col-8'}>
          <TitleComponent compTitle={this.state.user.firstName.concat('\'s Profile')}/>
          <Card className={'bg-primary bg-opacity-25'}>
            <DisplayAttribute attName={'First Name'} attVal={this.state.user.firstName}/>
            <DisplayAttribute attName={'Last Name'} attVal={this.state.user.lastName}/>
            <DisplayAttribute attName={'Role'} attVal={this.state.user.role}/>
            <DisplayAttribute attName={'Email'} attVal={this.state.user.email}/>
            <DisplayAttribute attName={'Password'} attVal={'+++++++++++'}/>
            <DisplayAttribute attName={'Phone Number'} attVal={this.state.user.phoneNum}/>
            <DisplayAttribute attName={'Subscribed'} attVal={this.state.user.isSubscribed.toString().toUpperCase()}/>
            <DisplayAttribute attName={'Status'} attVal={this.state.user.status}/>
            <Container>
              <Button variant={"warning"} className={'m-2'} onClick={this.handleEditProfileClick}>Edit Profile
                Information</Button>
              <Button variant={"outline-success"} className={'m-2'} onClick={this.handleAddAddressClick}>Add
                Address</Button>
              <Button variant={"outline-danger"} className={'m-2'} onClick={this.handleDeleteAddressClick}>Delete
                Address</Button>
              <Button variant={"outline-success"} className={'m-2'} onClick={this.handleAddPaymentClick}>Add Payment
                Method</Button>
              <Button variant={"danger"} className={'m-2'} onClick={this.handleEditPasswordClick}>Edit Password</Button>
            </Container>
            <Card className={'m-2'}>
              {this.renderAddress()}
            </Card>
            <Card className={'m-2'}>
              {this.state.paymentCards.map(paymentCard => {
                return (
                  <Container key={paymentCard.cardNum}>
                    <PaymentInfoComponent compTitle={'Card: '.concat(paymentCard.cardType)} paymentInfo={paymentCard}
                                          user={this.state.user}/>
                  </Container>
                )
              })}
            </Card>
          </Card>
          <Button variant={"danger"} className={'m-2'} onClick={this.logOut}>Log out</Button>
        </Container>
      )
    } else {
      return (
        <>
          <p>An error has ocurred</p>
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