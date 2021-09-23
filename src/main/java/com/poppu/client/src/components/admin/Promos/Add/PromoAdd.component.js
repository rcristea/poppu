import { React, Component } from 'react'
import './PromoAdd.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'

class PromoAdd extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className='promos-container'>
          <div className='cover'>
            <div className='promos-card'>
              <div className='promos-card-heading'>
                <div className='promos-card-title'>
                  <h1>Add Promotion</h1>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>Fill out the form below to create a new promotion</h3>
                </div>
              </div>
              <div className='promos-card-content'>
                Add promo
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PromoAdd