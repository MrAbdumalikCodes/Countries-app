import './Header.scss'
import dark from '../images/moon.svg'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
           <div className='header'>
              <div className='header-box'>
                <div className='title'>Where in the world?</div>
                <div className='dark-mode' onClick={this.props.changeLikeState}><img src={dark} alt="dark-mode" />  Dark Mode</div>
            </div>
        </div>
    )
  }
}

