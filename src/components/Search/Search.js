import React, { Component } from 'react'
import '../Search/Search.scss'
import searchLogo from '../images/search-box.svg'
export default class Search extends Component {
  onChangeSearchInput = (e) => { 
    this.props.setSearchValue(e.target.value)
  }
  render() {
    return (
      <div className='search-box'>
        <img src={searchLogo} alt="" />
        <input type="text" 
        onChange={this.onChangeSearchInput}
        />
      </div>
    )
  }
}
