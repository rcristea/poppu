import React, {Component} from 'react'
import './ScheduleEdit.component.css'

class ScheduleEdit extends Component {
  constructor(props) {
    super(props)

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

      </>
    )
  }
}

export default ScheduleEdit