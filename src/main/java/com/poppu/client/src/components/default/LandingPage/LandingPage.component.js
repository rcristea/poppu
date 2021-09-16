import {Component} from 'react'
import './LandingPage.component.css'
import NavBar from "../NavBar/NavBar.component";

export class LandingPage extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='landing-page-container'>
          <div className='landing-page-hero'>
            <div className='background'></div>
            <div className="custom-shape-divider-bottom-1630245566">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                   preserveAspectRatio="none">
                <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
              </svg>
            </div>
          </div>
          <div className='landing-page-content'>
            <div className='horizontal-scroll-snap-container'>
              <div className='horizontal-scroll-snap-heading'>Now Showing</div>

            </div>
          </div>
        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default LandingPage