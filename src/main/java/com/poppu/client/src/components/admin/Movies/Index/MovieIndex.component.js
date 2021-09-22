import { React, Component } from 'react'
import './MovieIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'

class MovieIndex extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className='movies-container'>
          movies
        </div>
      </>
    )
  }
}

export default MovieIndex