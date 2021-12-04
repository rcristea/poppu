import {Component} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, TitleComponent} from "./Utils.component";
import {putData} from "./methods";
import NavBar from "../NavBar/NavBar.component";


export class EditProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitProfile = this.handleSubmitProfile.bind(this)
    this.updateDB = this.updateDB.bind(this)

    this.subscribe = this.subscribe.bind(this)
    this.unSubscribe = this.unSubscribe.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'user') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  handleBack() {
    this.props.history.push('/profile')
  }

  async handleSubmitProfile() {
    if (this.state.user.firstName.trim() === '') {
      alert("Please enter your first name!")
    } else if (this.state.user.lastName.trim() === '') {
      alert("Please enter your last name!")
    } else if (this.state.user.phoneNum.trim() === '') {
      alert("Please enter a number for a phone number!")
    } else {
      this.updateDB()
      this.props.history.push('/profile')
      window.location.reload();
    }
  }

  async updateDB() {
    await putData(this.state.user, this.state.user._links.self.href)
  }

  async subscribe() {
    await this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        isSubscribed: true
      }
    })
  }

  async unSubscribe() {
    await this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        isSubscribed: false
      }
    })
  }

  toggleSubscribe = e => {
    if (e.target.value === 'true') {
      this.subscribe()
    } else {
      this.unSubscribe()
    }
  }

  render() {
    return (
      <>
        <NavBar/>
        <div style={{marginTop: 150 + 'px'}}>
          <div className='profile-container'>
            <div className='profile-left'>
              <div className='profile-header'>
                <h3 className='profile-title'>Edit Your Profile Info</h3>
              </div>
              <div className='profile-item'>
                <p className='grow'>Email</p>
                <p>{this.state.user.email}</p>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>First Name</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.user.firstName}
                  onChange={e => this.setState({
                    user: {
                      ...this.state.user,
                      firstName: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Last Name</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.user.lastName}
                  onChange={e => this.setState({
                    user: {
                      ...this.state.user,
                      lastName: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Phone Number</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.user.phoneNum}
                  onChange={e => this.setState({
                    user: {
                      ...this.state.user,
                      phoneNum: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Promotion Subscription</p>
                <select className='profile-input' value={this.state.isSubscribed} onChange={this.toggleSubscribe}>
                  <option value={true}>Subscribe</option>
                  <option value={false}>Unsubscribe</option>
                </select>
              </div>
            </div>
            <div className='profile-right'>
              <button className='booking-submit' onClick={this.handleSubmitProfile}>Submit</button>
              <button className='booking-cancel' onClick={this.handleBack}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EditProfileComponent