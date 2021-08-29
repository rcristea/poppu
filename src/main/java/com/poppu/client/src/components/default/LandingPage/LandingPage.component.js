import {Component} from 'react'
import './LandingPage.component.css'
import NavBar from "../NavBar/NavBar.component";

export class LandingPage extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div className='landing-page-container'>

        </div>
        {/*Footer here*/}
      </div>
    )
  }
}

export default LandingPage