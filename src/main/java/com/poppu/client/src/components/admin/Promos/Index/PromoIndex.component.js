import { React, Component } from 'react'
import { Pagination } from 'react-bootstrap'
import './PromoIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'

import { BiDotsVerticalRounded } from 'react-icons/bi'

class PromoIndex extends Component {
  constructor(props) {
    super(props);

    const newPromos = [
      {
        'id': 1,
        'code': 'one',
        'amount': 0,
      },
      {
        'id': 2,
        'code': 'two',
        'amount': 0,
      },
      {
        'id': 3,
        'code': 'three',
        'amount': 0,
      }
      ,
      {
        'id': 4,
        'code': 'four',
        'amount': 0,
      },
      {
        'id': 5,
        'code': 'five',
        'amount': 0,
      },
      {
        'id': 6,
        'code': 'six',
        'amount': 0,
      },
      {
        'id': 7,
        'code': 'seven',
        'amount': 0,
      },
      {
        'id': 8,
        'code': 'eight',
        'amount': 0,
      },
      {
        'id': 9,
        'code': 'nine',
        'amount': 0,
      },
      {
        'id': 10,
        'code': 'ten',
        'amount': 0,
      }
    ]

    const length = newPromos.length
    const totalPages = Math.ceil(length / 3)

    this.state = {
      promos: newPromos,
      currentPage: 1,
      totalPages: totalPages,
    }

    this.changePage = this.changePage.bind(this)
    this.renderPagination = this.renderPagination.bind(this)
  }

  renderPagination() {
    // <Pagination>
    //   <Pagination.First />
    //   <Pagination.Prev />
    //   <Pagination.Item>{1}</Pagination.Item>
    //   <Pagination.Ellipsis />
    //
    //   <Pagination.Item>{10}</Pagination.Item>
    //   <Pagination.Item>{11}</Pagination.Item>
    //   <Pagination.Item active>{12}</Pagination.Item>
    //   <Pagination.Item>{13}</Pagination.Item>
    //   <Pagination.Item disabled>{14}</Pagination.Item>
    //
    //   <Pagination.Ellipsis />
    //   <Pagination.Item>{20}</Pagination.Item>
    //   <Pagination.Next />
    //   <Pagination.Last />
    // </Pagination>
    if (this.state.totalPages < 10) {
      return (
        <Pagination>
          {}
        </Pagination>
      )
    }
  }

  changePage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
                </div>
                <div className='promos-card-subtitle'>
                  <h3>For more options, click the three dots on the right.</h3>
                </div>
              </div>
              <div className='promos-card-content'>
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Code</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                  {this.state.promos.map(promo =>
                    <tr>
                      <th>{promo.id}</th>
                      <td>{promo.code}</td>
                      <td>{promo.amount}</td>
                      <td><BiDotsVerticalRounded /></td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PromoIndex