import {React, Component} from 'react'
import './Sidebar.component.css'
import {Link} from 'react-router-dom'

import {BiMovie} from 'react-icons/bi'
import {RiCoupon2Line} from 'react-icons/ri'
import {RiDashboardLine} from 'react-icons/ri'
import {RiProfileLine} from "react-icons/ri";

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'admin',
    }
  }

  componentDidMount() {
    const path = window.location.pathname
    this.setState({
      active: path
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.active !== window.location.pathname) {
      this.setState({
        active: window.location.pathname
      })
    }
  }

  render() {
    return (
      <>
        <div className='topbar'>
          <div className='topbar-left'>
            <Link to='/admin'><h1 className='logo'>poppu</h1></Link>
          </div>
          <div className='topbar-right'>
            <button onClick={this.props.logOut}>Log Out</button>
          </div>
        </div>
        <div className='sidebar-container'>
          <div className='sidebar-nav-container'>
            <Link to='/admin'>
              <div className={`sidebar-nav-item ${this.state.active === '/admin' ? 'active' : ''} `}>
                <RiDashboardLine color='#fff'/>
                <p className='sidebar-nav-item-title'>Dashboard</p>
              </div>
            </Link>
            <Link to='/movies'>
              <div className={`sidebar-nav-item ${this.state.active.includes('/movies') ? 'active' : ''} `}>
                <BiMovie color='#fff'/>
                <p className='sidebar-nav-item-title'>Movies</p>
              </div>
            </Link>
            <Link to='/promos'>
              <div className={`sidebar-nav-item ${this.state.active.includes('/promos') ? 'active' : ''} `}>
                <RiCoupon2Line color='#fff'/>
                <p className='sidebar-nav-item-title'>Promos</p>
              </div>
            </Link>
            <Link to='/users'>
              <div className={`sidebar-nav-item ${this.state.active.includes('/users') ? 'active' : ''} `}>
                <RiProfileLine color='#fff'/>
                <p className='sidebar-nav-item-title'>Users</p>
              </div>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Sidebar