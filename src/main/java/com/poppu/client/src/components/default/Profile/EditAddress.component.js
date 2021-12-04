import {Component} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./Utils.component";
import {putData} from "./methods";
import NavBar from "../NavBar/NavBar.component";

export class EditAddressComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.location.state.address,
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitAddress = this.handleSubmitAddress.bind(this)
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

  handleSubmitAddress() {
    if (this.state.address.city.trim() === '') {
      alert("City field is empty!")
    } else if (this.state.address.street.trim() === '') {
      alert("Street field is empty!")
    } else if (isNaN(this.state.address.zipCode)) {
      alert("A zip is supposed to be a number!")
    } else if (this.state.address.zipCode.trim().length !== 5) {
      alert("A zip code is supposed to have 5 digits")
    } else {
      putData(this.state.address, this.state.address._links.self.href)
      this.props.history.push('/profile')
      window.location.reload();
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <div style={{marginTop: 150 + 'px'}}>
          <div className='profile-container'>
            <div className='profile-left'>
              <div className='profile-header'>
                <h3 className='profile-title'>Edit Your Address</h3>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Street</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.address.street}
                  onChange={e => this.setState({
                    address: {
                      ...this.state.address,
                      street: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>City</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.address.city}
                  onChange={e => this.setState({
                    address: {
                      ...this.state.address,
                      city: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Zipcode</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.address.zipCode}
                  onChange={e => this.setState({
                    address: {
                      ...this.state.address,
                      zipCode: e.target.value,
                    },
                  })}/>
              </div>
            </div>
            <div className='profile-right'>
              <button className='booking-submit' onClick={this.handleSubmitAddress}>Submit</button>
              <button className='booking-cancel' onClick={this.handleBack}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EditAddressComponent