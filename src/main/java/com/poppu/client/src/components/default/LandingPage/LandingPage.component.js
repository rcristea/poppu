import {Component, createRef} from 'react'
import './LandingPage.component.css'
import NavBar from '../NavBar/NavBar.component'
import HorizontalScrollSnap from '../HorizontalScrollSnap/HorizontalScrollSnap.component'
import {IoIosClose} from 'react-icons/io'

export class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nowShowing: null,
      comingSoon: null,
    }

    this.closeAlert = this.closeAlert.bind(this)
    this.alertRef = createRef()
  }

  getMovieByShowing(isShowing) {
    return fetch(`http://localhost:8080/movies/search/${isShowing ? 'findByIsShowingTrue' : 'findByIsShowingFalse'}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          return json._embedded.movies
        })
      } else {
        return null
      }
    }).catch(error => {
      return null
    })
  }

  async componentDidMount() {
    this.setState({
      nowShowing: await this.getMovieByShowing(true),
      comingSoon: await this.getMovieByShowing(false),
    })
  }

  closeAlert() {
    this.alertRef.current.style.display = 'none'
  }

  renderAlert() {
    if (sessionStorage.getItem('alert')) {
      let message = sessionStorage.getItem('alert')
      sessionStorage.removeItem('alert')
      return (
        <div className='session-alert' ref={this.alertRef}>
          <p>{message}</p><IoIosClose size='25px' color='#fff' onClick={this.closeAlert}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='landing-container'>
        <NavBar/>
        {this.renderAlert()}
        <div className='landing-page-container'>
          <div className='landing-page-hero'>
            <div className='background'/>
            <div className='custom-shape-divider-bottom-1630245566'>
              <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'
                   preserveAspectRatio='none'>
                <path d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z' className='shape-fill'/>
              </svg>
            </div>
          </div>
          <div className='landing-page-content'>
            {this.state.nowShowing !== null ? <HorizontalScrollSnap data={this.state.nowShowing} heading='Now Showing'/> : null}
            <div className='spacer'/>
            {this.state.comingSoon !== null ? <HorizontalScrollSnap data={this.state.comingSoon} heading='Coming Soon'/> : null }
          </div>
        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default LandingPage