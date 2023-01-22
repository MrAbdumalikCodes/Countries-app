import '../Dropdown/Dropdown.scss'
import dropdown from '../images/dropdown.svg'
import React, { Component } from 'react'

export default class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      like:false
    }
  }
  changeLikeState = () => {
    this.setState({ like: !this.state.like })
}
  render(){
    let clazz = 'dropdown-menu '
    if(this.state.like){
      clazz += 'show'
    }
    return (
      <div className='box-dropdown'>
          <div onClick={this.changeLikeState} className='dropdown'>Filter by Region <img src={dropdown} alt="dropdown" /></div>
          <div className={clazz}>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
          </div>
      </div>)
  }
}



