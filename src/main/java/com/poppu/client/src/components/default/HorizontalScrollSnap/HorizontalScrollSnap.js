import {Component, createRef} from 'react'
import './HorizontalScrollSnap.css'

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

export class HorizontalSnapScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scroller: null,
      itemWidth: 0,
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
        <div className='horizontal-scroll-snap-heading'>Now Showing {this.state.currentItem} {this.state.numItems}</div>
        <div className='horizontal-scroll-snap-inline'>
          <button onClick={e => this.previous()}>
            <div className='horizontal-scroll-snap-left'>
              <IoIosArrowBack size={32} />
            </div>
          </button>
          <div className='horizontal-scroll-snap-container' ref={this.containerRef}>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/8YjFbMbfXaQ"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/K8nm0iYLvcs"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MysGjRS9jFU"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/gRbG2tjHYCA"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/20DF6U1HcGQ"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
            <section className='horizontal-scroll-snap-child'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t7FwypV69qc"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
            </section>
          </div>
          <button onClick={e =>this.next()}>
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