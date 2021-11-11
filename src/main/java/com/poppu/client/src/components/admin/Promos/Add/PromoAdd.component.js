import React, {Component} from 'react'
import './PromoAdd.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import {Form, FormLabel, FormGroup, FormControl, FormCheck} from 'react-bootstrap'

class PromoAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      promotionId: '',
      offer: '',
      startTime: '',
      endTime: '',
      isSent: 0,
      error: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.logOut = this.logOut.bind(this)
    this.postData = this.postData.bind(this)
    this.getData = this.getData.bind(this)
    this.validateData = this.validateData.bind(this)
    this.isUniqueCode = this.isUniqueCode.bind(this)
    this.sendPromotionEmails = this.sendPromotionEmails.bind(this)
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

  getData(id, destination) {
    return fetch(`http://localhost:8080/${destination}/${id}`, {
      method: 'GET',
    })
  }

  async postData(data, destination) {
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/${destination}/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  async isUniqueCode() {
    let isUnique = await this.getData(this.state.promotionId, 'promotions').then(response => {
      if (response.ok) {
        return false
      } else {
        return true
      }
    }).catch(function() {
      return true
    })

    return isUnique
  }

  async validateData() {
    if (this.state.promotionId.length === 0) {
      this.setState({
        error: 'Please enter a valid code.',
      })
    } else if (this.state.offer.length === 0) {
      this.setState({
        error: 'Please enter a valid offer amount.',
      })
    } else if (!(await this.isUniqueCode())) {
      this.setState({
        error: 'The code you entered has already been used.'
      })
    }
  }

  async sendPromotionEmails() {
    // Get the users that are subscribed
    let subscribedUsers = await fetch(`http://localhost:8080/users/search/findAllByIsSubscribed?isSubscribed=true`, {
      method: 'GET',
    }).then(response => {
      return response.json().then(json => {
        return json
      })
    }).catch(error => {
      console.error(error)
      return null
    })

    // build uri string with all the emails of the users that are subscribed
    let uri = '?'
    subscribedUsers._embedded.users.forEach(subscribedUser => {
      uri += `&emails=${subscribedUser.email}`
    })

    uri += '&promo_id=' + this.state.promotionId
    uri += '&promo_amount=' + this.state.offer

    // Send post request to /api/promotion/send_promo_emails/ with the uri list
    fetch('http://localhost:8080/api/promotion/send_promo_emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: uri
    })
  }

  handleChange(event) {
    this.setState({
      error: '',
    })

    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  handleCheckChange(event) {
    let isChecked = event.target.checked
    this.setState({
      isSent: isChecked
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    await this.validateData()
    if (this.state.error.length !== 0) {
      return
    }

    if (this.state.isSent) {
      await this.sendPromotionEmails()
    }

    this.postData(this.state, 'promotions').then(response => {
      sessionStorage.setItem('alert-success', 'Success! New promotion code created.')
      this.props.history.push('/promos')
    }).catch(error => {
      console.error(error)
      sessionStorage.setItem('alert-error', 'Error! Something went wrong when trying to add a promotion code')
      this.props.history.push('/promos')
    })
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  renderError() {
    return (
      <div className='promos-card-error'>
        <p>{this.state.error}</p>
      </div>
    )
  }

  render() {
    return (
      <>
        <Sidebar logOut={this.logOut}/>
        <div className='promos-container'>
          <div className='cover'>
            <div className='promos-card'>
              <div className='promos-card-heading'>
                <div className='promos-card-title'>
                  <h1>Add Promotion</h1>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>Fill out the form below to create a new promotion</h3>
                </div>
              </div>
              <div className='promos-card-content-noscroll'>
                {this.renderError()}
                <Form className='promos-add' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormLabel>Code</FormLabel>
                    <FormControl type='text' name='promotionId' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Amount</FormLabel>
                    <FormControl type='text' name='offer' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl type='datetime-local' name='startTime' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>End Date</FormLabel>
                    <FormControl type='datetime-local' name='endTime' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup className={'d-flex'}>
                    <FormCheck type='checkbox' name='isSent' defaultChecked={this.state.isSent} onChange={this.handleCheckChange}/>
                    &nbsp;Send Promotion
                  </FormGroup>
                  <FormGroup>
                    <button type='submit'>Submit</button>
                    <a className='cancel' href='/promos'>Cancel</a>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PromoAdd