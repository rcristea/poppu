import React, {Component} from 'react'
import './PromoEdit.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import {Form, FormLabel, FormGroup, FormControl, FormCheck} from 'react-bootstrap'

class PromoEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      promotionId: this.props.match.params.id,
      offer: '',
      startTime: '',
      endTime: '',
      isSent: 0,
      error: '',
    }

    this.getPromo = this.getPromo.bind(this)
    this.putPromo = this.putPromo.bind(this)
    this.sendPromotionEmails = this.sendPromotionEmails.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  getPromo() {
    let id = this.state.promotionId
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/promotions/${id}`, {
        method: 'GET',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  putPromo() {
    let data = {
      promotionId: this.state.promotionId,
      offer: this.state.offer,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      isSent: this.state.isSent !== 0,
    }


    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/promotions/${data.promotionId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
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

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.isSent) {
      this.sendPromotionEmails()
    }

    this.putPromo(this.state);
    this.props.history.push('/promos')
    alert('Promotion updated')
  }

  async componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }

    let promo = await this.getPromo()

    if (promo.isSent) {
      alert('This promotion cannot be modified because the email has already been sent!')
      this.props.history.push('/promos')
      return
    }

    this.setState({
      offer: promo.offer,
      startTime: promo.startTime !== null ? promo.startTime.substring(0, 19) : '',
      endTime: promo.startTime !== null ? promo.endTime.substring(0,19) : '',
    })
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
                  <h1>Edit Promotion</h1>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>Edit the start and end time for the promotion</h3>
                </div>
              </div>
              <div className='promos-card-content-noscroll'>
                {this.renderError()}
                <Form className='promos-add' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormLabel>Code</FormLabel>
                    <FormControl type='text' name='promotionId' value={this.state.promotionId} onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Amount</FormLabel>
                    <FormControl type='text' name='offer' value={this.state.offer} onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl type='datetime-local' name='startTime' value={this.state.startTime} onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>End Date</FormLabel>
                    <FormControl type='datetime-local' name='endTime' value={this.state.endTime} onChange={this.handleChange}/>
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

export default PromoEdit