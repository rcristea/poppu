import React, {Component} from 'react'
import './Dashboard.component.css'
import Sidebar from '../Sidebar/Sidebar.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardMoviesComponent from './DashboardMovies.component'
import DashboardPromos from './DashboardPromos.component'
import Alert from '../Alerts/Alert'
import DashboardSchedule from './DashboardSchedule.component'
import DashboardUsers from './DashboardUsers.component'


class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.renderAlert = this.renderAlert.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  renderAlert() {
    let alertSuccess = sessionStorage.getItem('alert-success')
    let alertError = sessionStorage.getItem('alert-error')

    if (alertSuccess) {
      sessionStorage.removeItem('alert-success')
      return (
        <Alert message={alertSuccess} type={'success'}/>
      )
    } else if (alertError) {
      sessionStorage.removeItem('alert-error')
      return (
        <Alert message={alertError} type={'error'}/>
      )
    } else {
      return null
    }
  }


  render() {
    return (
      <>
        <Sidebar />
        {this.renderAlert()}
        <div className='dashboard-container'>
          <div className='dashboard-header'>
            <h1>Poppu Admin Dashboard</h1>
            <h3>Dashboard / Analytics</h3>
          </div>
          <div className='dashboard-card-container'>
            <DashboardMoviesComponent />
            <DashboardPromos />
            <DashboardSchedule />
            <DashboardUsers />
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard