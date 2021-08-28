import React, {Component} from 'react'
import './LandingPage.component.css'
import {Link} from 'react-router-dom';

export class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page-container'>
        <ul>
          <li><Link to='/tests'>Index Tests</Link></li>
          <li><Link to='/tests/add'>Add Test</Link></li>
        </ul>
      </div>
    )
  }
}

export default LandingPage