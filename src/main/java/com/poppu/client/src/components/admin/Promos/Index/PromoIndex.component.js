import { React, Component } from 'react'
import './PromoIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import { BiPlus } from 'react-icons/bi'

//TODO need to paginate the index
//  This isnt needed for deliverable so maybe skip for now

class PromoIndex extends Component {
  constructor(props) {
    super(props);

    const newPromos = [
      {
        'id': 1,
        'code': 'one',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 2,
        'code': 'two',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 3,
        'code': 'three',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      }
      ,
      {
        'id': 4,
        'code': 'four',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 5,
        'code': 'five',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 6,
        'code': 'six',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 7,
        'code': 'seven',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 8,
        'code': 'eight',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 9,
        'code': 'nine',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      },
      {
        'id': 10,
        'code': 'ten',
        'amount': 0,
        'start_date': '2022-01-01T00:00:00',
        'end_date': '2022-01-02T00:00:00',
      }
    ]

    const length = newPromos.length
    const totalPages = Math.ceil(length / 3)

    this.state = {
      promos: newPromos,
      currentPage: 1,
      totalPages: totalPages,
    }
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className='promos-container'>
          <div className='cover'>
            <div className='promos-card'>
              <div className='promos-card-heading'>
                <div className='promos-card-title'>
                  <h1>Promotions</h1>
                  <a href='/promos/add'>Add <BiPlus /></a>
                </div>
                <div className='promos-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='promos-card-content'>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PromoIndex