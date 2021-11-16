import {Component} from 'react'
import './NavBar.component.css'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasOpenedMobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.renderAuth = this.renderAuth.bind(this)
  }

  toggleMobileMenu() {
    if (this.state.hasOpenedMobileMenu) {
      this.setState({hasOpenedMobileMenu: false, isScrolled: false})
      window.scrollTo({top: 0})
    } else {
      this.setState({hasOpenedMobileMenu: true, isScrolled: true})
    }
  }

  renderAuth() {
    let role = sessionStorage.getItem('role')
    if (role === 'user') {
      return (
        <Link to='/profile'>
          <div className='login-button'>Profile</div>
        </Link>
      )
    } else if (role === 'admin') {
      return (
        <Link to='/admin'>
          <div className='login-button'>Dashboard</div>
        </Link>
      )
    } else {
      return (
        <Link to='/login'>
          <div className='login-button'>Login</div>
        </Link>
      )
    }
  }

  render() {
    return (
      <div className='header'>
        <header>
          <nav className='nav nav-desktop'>
            <div className='nav-left'>
              <div className='logo'>
                <Link to='/'>poppu</Link>
              </div>
            </div>
            <div className='nav-center'>
              <div className='nav-link'>
                <a href='/#'>Movies</a>
              </div>
              <div className='nav-link'>
                <a href='/#'>Theaters</a>
              </div>
              <div className='nav-link'>
                <a href='/#'>Support</a>
              </div>
            </div>
            <div className='nav-right'>
              {this.renderAuth()}
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default NavBar