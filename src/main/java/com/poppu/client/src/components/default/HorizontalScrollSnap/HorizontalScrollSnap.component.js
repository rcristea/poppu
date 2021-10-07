import {Component, createRef} from 'react'
import './HorizontalScrollSnap.component.css'

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

export class HorizontalSnapScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scroller: null,
      itemWidth: 0,
      movies: props.data,
    }

    this.containerRef = createRef()
  }

  previous = () => {
    this.state.scroller.scrollBy({left: this.state.itemWidth * -1, top: 0, behavior: 'smooth'})
  }

  next = () => {
    this.state.scroller.scrollBy({left: this.state.itemWidth, top: 0, behavior: 'smooth'})
  }

  componentDidMount() {
    const scroller = this.containerRef.current
    const itemWidth = this.containerRef.current.firstElementChild?.clientWidth

    this.setState( {
      scroller: scroller,
      itemWidth: itemWidth,
    })
  }

  render() {
    return (
      <div>
        <div className='horizontal-scroll-snap-heading'>{this.props.heading}</div>
        <div className='horizontal-scroll-snap-inline'>
          <button className='btn-arrow' onClick={e => this.previous()}>
            <div className='horizontal-scroll-snap-left'>
              <IoIosArrowBack size={32} />
            </div>
          </button>
          <div className='horizontal-scroll-snap-container' ref={this.containerRef}>
            {this.state.movies.map(movie =>  {
              return (
                <section className='horizontal-scroll-snap-child' key={movie.movie_id}>
                    <img src={`${process.env.PUBLIC_URL}/${movie.movie_poster}`} alt={`${movie.movie_name} poster`} width={'350px'} height={'518px'}/>
                  <div className='horizontal-scroll-snap-child-info'>
                    <h2 className='grow-1'>{movie.movie_name}</h2>
                    <h2>{movie.movie_rating} / 10</h2>
                  </div>
                </section>
              )
            })}
          </div>
          <button className='btn-arrow' onClick={e =>this.next()}>
            <div className='horizontal-scroll-snap-right'>
              <IoIosArrowForward size={32} />
            </div>
          </button>
        </div>
      </div>
    )
  }
}

export default HorizontalSnapScroll