import { React, Component } from 'react'
import './PromoIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'

class PromoIndex extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className='promos-container'>
          Promos
        </div>
      </>
    )
  }
}

export default PromoIndex