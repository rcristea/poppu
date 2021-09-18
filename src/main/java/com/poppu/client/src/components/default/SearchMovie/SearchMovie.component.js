import { Component } from 'react'
import './SearchMovie.component.css'

import { AiOutlineSearch } from 'react-icons/ai'

export class SearchMovie extends Component {
  render() {
    return (
      <div className='search-movie-container'>
        <form className='search-movie-form'>
          <div className='query-container'>
            <input type='text' className='query' placeholder='Search Movies'/>
            <button type="submit" className="searchButton">
              <AiOutlineSearch size='24px'/>
            </button>
            <div className='category-container'>
              <label>
                Category
              </label>
              <select>
                <option value='01'>Category 01</option>
                <option value='02'>Category 02</option>
                <option value='03'>Category 03</option>
              </select>
            </div>
            <div className='date-container'>
              <label>
                Show Date
              </label>
              <input type='date' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchMovie