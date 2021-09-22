import { React, Component } from 'react'
import './Dashboard.component.css'
import Sidebar from '../Sidebar/Sidebar.component'

class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className='dashboard-container'>
          test
        </div>
      </>
    )
  }
}

export default Dashboard