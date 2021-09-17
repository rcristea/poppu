import { Component } from 'react'
import './LandingPage.component.css'
import NavBar from '../NavBar/NavBar.component'
import HorizontalScrollSnap from '../HorizontalScrollSnap/HorizontalScrollSnap'

export class LandingPage extends Component {
  nowShowing = [
    {
      "movie_id": 1,
      "movie_name": "Shang-Chi",
      "movie_rating": 8.8,
      "movie_trailer_link": "8YjFbMbfXaQ"
    },
    {
      "movie_id": 2,
      "movie_name": "Uncle Frank",
      "movie_rating": 7.8,
      "movie_trailer_link": "K8nm0iYLvcs"
    },
    {
      "movie_id": 3,
      "movie_name": "KATE",
      "movie_rating": 6.6,
      "movie_trailer_link": "MysGjRS9jFU"
    },
    {
      "movie_id": 4,
      "movie_name": "Don't Breathe 2",
      "movie_rating": 8.2,
      "movie_trailer_link": "gRbG2tjHYCA"
    },
    {
      "movie_id": 5,
      "movie_name": "Cinderella",
      "movie_rating": 1.5,
      "movie_trailer_link": "20DF6U1HcGQ"
    },
    {
      "movie_id": 6,
      "movie_name": "Red Dot",
      "movie_rating": 5.7,
      "movie_trailer_link": "t7FwypV69qc"
    },
  ]
  comingSoon = [
    {
      "movie_id": 7,
      "movie_name": "After We Fell",
      "movie_rating": 5.4,
      "movie_trailer_link": "NYdNN6C9hfI"
    },
    {
      "movie_id": 8,
      "movie_name": "SPIDER-MAN: NO WAY HOME",
      "movie_rating": 7.8,
      "movie_trailer_link": "rt-2cxAiPJk"
    },
    {
      "movie_id": 9,
      "movie_name": "My Hero Academia: World Heroes' Mission",
      "movie_rating": 6.6,
      "movie_trailer_link": "6cBYUfAno-0"
    },
    {
      "movie_id": 10,
      "movie_name": "The Matrix Ressurections",
      "movie_rating": 4.2,
      "movie_trailer_link": "9ix7TUGVYIo"
    },
    {
      "movie_id": 11,
      "movie_name": "Eternals",
      "movie_rating": 7.5,
      "movie_trailer_link": "x_me3xsvDgk"
    },
    {
      "movie_id": 12,
      "movie_name": "SPIDER-MAN: INTO THE SPIDER-VERSE 2",
      "movie_rating": 9.7,
      "movie_trailer_link": "HsX8pVqp_gg"
    },
  ]

  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='landing-page-container'>
          <div className='landing-page-hero'>
            <div className='background' />
            <div className="custom-shape-divider-bottom-1630245566">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                   preserveAspectRatio="none">
                <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill" />
              </svg>
            </div>
          </div>
          <div className='landing-page-content'>
            <HorizontalScrollSnap data={this.nowShowing} heading='Now Showing'/>
            <div className='spacer' />
            <HorizontalScrollSnap data={this.comingSoon} heading='Coming Soon'/>
          </div>
        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default LandingPage