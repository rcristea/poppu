import { React, Component } from 'react'
import './MovieIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import {ManageMoviesComponent} from './ManageMovies.component'

class MovieIndex extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className='movies-container'>
          <ManageMoviesComponent/>
        </div>
      </>
    )
  }
}

export default MovieIndex