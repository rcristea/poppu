import React, {Component, createRef} from 'react'
import './Alerts.css'
import {IoIosClose} from 'react-icons/io'

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message,
      type: this.props.type,
    }

    this.closeAlert = this.closeAlert.bind(this)

    this.alertRef = createRef()
  }

  closeAlert() {
    this.alertRef.current.style.display = 'none'
  }

  render() {
    return (
      <>
        <div className={`admin-alert ${this.state.type}`} ref={this.alertRef}>
          <p>{this.state.message}</p><IoIosClose size='25px' color='#fff' onClick={this.closeAlert}/>
        </div>
      </>
    )
  }
}

export default Alert