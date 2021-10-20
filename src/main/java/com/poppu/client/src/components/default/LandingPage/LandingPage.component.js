import {Component, createRef} from 'react'
import './LandingPage.component.css'
import NavBar from '../NavBar/NavBar.component'
import HorizontalScrollSnap from '../HorizontalScrollSnap/HorizontalScrollSnap.component'
import SearchMovie from '../SearchMovie/SearchMovie.component'
import { IoIosClose } from 'react-icons/io'

export class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.closeAlert = this.closeAlert.bind(this)

    this.alertRef = createRef()
  }

  nowShowing = [
    {
      'movie_id': 1,
      'movie_name': 'Shang-Chi',
      'movie_rating': 8.8,
      'movie_trailer_link': '8YjFbMbfXaQ',
      'movie_poster': 'assets/img/posters/shangchi_and_the_legend_of_the_ten_rings.jpeg',
    },
    {
      'movie_id': 2,
      'movie_name': 'Uncle Frank',
      'movie_rating': 7.8,
      'movie_trailer_link': 'K8nm0iYLvcs',
      'movie_poster': 'assets/img/posters/uncle_frank.jpg',
    },
    {
      'movie_id': 3,
      'movie_name': 'KATE',
      'movie_rating': 6.6,
      'movie_trailer_link': 'MysGjRS9jFU',
      'movie_poster': 'assets/img/posters/kate.jpg',
    },
    {
      'movie_id': 4,
      'movie_name': 'Don\'t Breathe 2',
      'movie_rating': 8.2,
      'movie_trailer_link': 'gRbG2tjHYCA',
      'movie_poster': 'assets/img/posters/dont_breathe_2.jpg',
    },
    {
      'movie_id': 5,
      'movie_name': 'Cinderella',
      'movie_rating': 1.5,
      'movie_trailer_link': '20DF6U1HcGQ',
      'movie_poster': 'assets/img/posters/cinderella_2021.jpg',
    },
    {
      'movie_id': 6,
      'movie_name': 'Red Dot',
      'movie_rating': 5.7,
      'movie_trailer_link': 't7FwypV69qc',
      'movie_poster': 'assets/img/posters/red_dot.jpeg',
    },
  ]
  comingSoon = [
    {
      'movie_id': 7,
      'movie_name': 'After We Fell',
      'movie_rating': 5.4,
      'movie_trailer_link': 'NYdNN6C9hfI',
      'movie_poster': 'assets/img/posters/after_we_fell.jpeg',
    },
    {
      'movie_id': 8,
      'movie_name': 'SPIDER-MAN: NO WAY HOME',
      'movie_rating': 7.8,
      'movie_trailer_link': 'rt-2cxAiPJk',
      'movie_poster': 'assets/img/posters/spider_man_no_way_home.jpeg',
    },
    {
      'movie_id': 9,
      'movie_name': 'My Hero Academia: World Heroes\' Mission',
      'movie_rating': 6.6,
      'movie_trailer_link': '6cBYUfAno-0',
      'movie_poster': 'assets/img/posters/my_hero_academia_world_heroes_mission.png',
    },
    {
      'movie_id': 10,
      'movie_name': 'The Matrix Resurrections',
      'movie_rating': 4.2,
      'movie_trailer_link': '9ix7TUGVYIo',
      'movie_poster': 'assets/img/posters/the_matrix_resurrections.jpg',
    },
    {
      'movie_id': 11,
      'movie_name': 'Eternals',
      'movie_rating': 7.5,
      'movie_trailer_link': 'x_me3xsvDgk',
      'movie_poster': 'assets/img/posters/eternals.jpeg',
    },
    {
      'movie_id': 12,
      'movie_name': 'SPIDER-MAN: Into The Spider-Verse 2',
      'movie_rating': 9.7,
      'movie_trailer_link': 'HsX8pVqp_gg',
      'movie_poster': 'assets/img/posters/spider_man_into_the_spider_verse_2.jpeg',
    },
  ]

  /**
   * Gets all the now showing movies from the data base.
   *
   * @returns Array of now showing movie models.
   */
  async getNowShowing() {
    return
  }

  /**
   * Gets all the coming soon movies from the data base.
   *
   * @returns Array of coming soon movie models.
   */
  async getComingSoon() {
    return
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
        <NavBar />
        {this.renderAlert()}
        <div className='landing-page-container'>
          <div className='landing-page-hero'>
            <div className='background' />
            <div className='custom-shape-divider-bottom-1630245566'>
              <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'
                   preserveAspectRatio='none'>
                <path d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z' className='shape-fill' />
              </svg>
            </div>
          </div>
          <div className='landing-page-content'>
            <SearchMovie />
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