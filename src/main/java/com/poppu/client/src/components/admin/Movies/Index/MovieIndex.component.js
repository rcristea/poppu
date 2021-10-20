import { React, Component } from 'react'
import './MovieIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import {ManageMoviesComponent} from './ManageMovies.component'

class MovieIndex extends Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    if (sessionStorage.getItem('role')) {
      sessionStorage.removeItem('role')
      sessionStorage.setItem('alert', 'Successfully logged out!')

      this.props.history.push('/')
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
        <Sidebar logOut={this.logOut}/>
        <div className='movies-container'>
          <ManageMoviesComponent/>
        </div>
      </>
    )
  }
}

export default MovieIndex