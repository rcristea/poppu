import { Component } from 'react'
import './SearchMovie.component.css'

import { AiOutlineSearch } from 'react-icons/ai'

export class SearchMovie extends Component {
  render() {
    return (
      <div className='search-movie-container'>
        <form className='search-movie-form'>
          <div className='query-container'>
            <input type='text' className='query' placeholder='Search movies'/>
            <button type="submit" className="searchButton">
              <AiOutlineSearch size='32px'/>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchMovie