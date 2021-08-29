import {Component} from 'react'
import './NavBar.component.css'
import {Link} from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasOpenedMobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    if (this.state.hasOpenedMobileMenu) {
      this.setState({hasOpenedMobileMenu: false, isScrolled: false})
      window.scrollTo({top: 0})
    } else {
      this.setState({hasOpenedMobileMenu: true, isScrolled: true})
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
              <div className='login-button'>
                <Link to='/login'>Login</Link>
              </div>
            </div>
          </nav>
          <nav className='nav nav-mobile'>
            <div className='nav-left'>
              <div className='nav-hamburger' onClick={this.toggleMobileMenu}>
                <svg xmlns='http://www.w3.org/2000/svg' className='nav-icon' width='16' height='16' viewBox='0 0 16 16'
                     strokeWidth='1' stroke='#000000' fill='none'>
                  <path stroke='none' d='M0 0h16v16H0z' fill='none'/>
                  <g>
                    <line x1='0' y1='3' x2='15' y2='3'/>
                    <line x1='0' y1='11' x2='15' y2='11'/>
                  </g>
                </svg>
              </div>
            </div>
            <div className='nav-center'>
              <div className='imperia-logo'>
                <a href='/'>imperia</a>
              </div>
            </div>
            <div className='nav-right'>
              <div className='nav-mobile-bag'>
                <span className='nav-mobile-bag-qty' id='nav-bag-qty'>0</span>
              </div>
              <svg xmlns='http://www.w3.org/2000/svg' className='nav-icon' width='16' height='16' viewBox='0 0 16 16'
                   strokeWidth='1' stroke='#000000' fill='none'>
                <path stroke='none' d='M0 0h16v16H0z' fill='none'/>
                <g fill='#fff'>
                  <rect width='5' height='6' x='5.5' y='0.5' rx='2.5'/>
                  <rect width='11.5' height='10' x='2.5' y='4.5'/>
                </g>
              </svg>
            </div>
          </nav>
        </header>
        <div className={`nav-mobile-fullscreen ${this.state.hasOpenedMobileMenu ? '' : 'd-none'}`}>
          <div className='header-push'></div>
          <div className='nav-mobile-container'>
            <div className='nav-mobile-group'>
              <h3>collection</h3>
              <a href='/#'>Autum/Winter 2022</a>
              <a href='/#'>Spring/Summer 2022</a>
              <a href='/#'>Sale</a>
            </div>
            <div className='nav-mobile-group'>
              <h3>navigation</h3>
              <a href='/#'>Read</a>
              <a href='/#'>Company</a>
              <a href='/#'>Account</a>
              <a href='/#'>Newsletter</a>
              <a href='/#'>Client Services</a>
              <a href='/#'>Terms of Service</a>
              <a href='/#'>Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className={`header-push ${this.state.isScrolled ? '' : 'd-none'}`}></div>
      </div>
    )
  }
}

export default NavBar