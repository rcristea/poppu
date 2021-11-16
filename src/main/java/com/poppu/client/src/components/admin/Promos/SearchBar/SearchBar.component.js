import React, { Component } from 'react'
import './SearchBar.component.css'

class SearchBar extends Component {
  render() {
    return(
      <>
        <form className='search-bar'>
          <input type='text' name='code' placeholder='Promo Code' />
          <input className='mx-15' type='text' name='amount' placeholder='Promo Amount' />
          <button className='search-button'  type='submit'>Search</button>
        </form>
      </>
    )
  }
}

export default SearchBar