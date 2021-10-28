import React, { Component } from 'react'
import './PromoAdd.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import { Form, FormLabel, FormGroup, FormControl } from 'react-bootstrap'

class PromoAdd extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.logOut = this.logOut.bind(this)
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

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push('/promos')
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
                <Form className='promos-add' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormLabel>Code</FormLabel>
                    <FormControl type='text' name='code'/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Amount</FormLabel>
                    <FormControl type='text' name='amount' />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl type='datetime-local' name='start_date' />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>End Date</FormLabel>
                    <FormControl type='datetime-local' name='end_date' />
                  </FormGroup>
                  <FormGroup>
                    <button type='submit'>Submit</button>
                    <a className='cancel'  href='/promos'>Cancel</a>
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