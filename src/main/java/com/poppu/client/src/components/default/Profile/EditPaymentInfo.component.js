import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {Component} from "react";
import {putData} from "./methods";
import NavBar from "../NavBar/NavBar.component";

export class EditPaymentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentInfo: this.props.location.state.paymentInfo
    };

    this.handleBack = this.handleBack.bind(this);
    this.handleSubmitPayment = this.handleSubmitPayment.bind(this);
  }

  handleBack() {
    this.props.history.push('/profile')
  }

  handleSubmitPayment() {
    if (this.state.paymentInfo.cardNum.trim() === '') {
      alert("Please enter a number for your payment card!")
    } else if (this.state.paymentInfo.cardType.trim() === '') {
      alert("Please enter a your card type!")
    } else if (this.state.paymentInfo.expDate.trim().length === 0) {
      alert("Please enter an expiration date for your card!")
    } else {
      putData(this.state.paymentInfo, this.state.paymentInfo._links.self.href)
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
            <div className='profile-left' style={{maxWidth: '70%'}}>
              <div className='profile-header'>
                <h3 className='profile-title'>Edit Payment</h3>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Card Number</p>
                <input
                  type='text'
                  className='profile-input'
                  value={'****************'}
                  disabled={true}
                  onChange={e => this.setState({
                    paymentInfo: {
                      ...this.state.paymentInfo,
                      cardNum: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Card Type</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.paymentInfo.cardType}
                  onChange={e => this.setState({
                    paymentInfo: {
                      ...this.state.paymentInfo,
                      cardType: e.target.value,
                    },
                  })}/>
              </div>
              <div className='profile-item mb-1'>
                <p className='grow'>Expiration Date (mm/yy)</p>
                <input
                  type='text'
                  className='profile-input'
                  value={this.state.paymentInfo.expDate}
                  onChange={e => this.setState({
                    paymentInfo: {
                      ...this.state.paymentInfo,
                      expDate: e.target.value,
                    },
                  })}/>
              </div>
            </div>
            <div className='profile-right'>
              <button className='booking-submit' onClick={this.handleSubmitPayment}>Submit</button>
              <button className='booking-cancel' onClick={this.handleBack}>Cancel</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EditPaymentInfoComponent