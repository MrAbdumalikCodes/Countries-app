import './App.scss';
import React, { Component } from 'react'
import Header from '../Header/Header';
import CountryItem from '../Country-item/CountryItem';
import Search from '../Search/Search'
import Dropdown from '../Dropdown/Dropdown';
import load from '../images/Loader.gif'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {
          name:"Hi I'm Countries-app",
          capital:"Loading",
          region:"Europe",
          population:1200,
          flags:{
            svg:'Loading'
          }
        }
      ],
      like:false,
      searchValue:'',
    }
}

  changeLikeState = () => {
    this.setState({ like: !this.state.like })
  } 
  componentDidMount(){
    fetch('https://restcountries.com/v2/all?fields=name,capital,region,population,flags')
    .then(res => res.json())
    .then(json => {
      this.setState(({name}) => {
        return{
          data:json
        }
      })
    })
  }
  setSearchValue = (str) =>{
    this.setState( ({searchValue}) => {
      return { searchValue : str }
    } )
}
  render() {
    const { data,searchValue }=this.state
    let filterData = data.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    let clazz= "dislike"
    if(this.state.like){
      clazz += 'like'
    }

    return (
          <body className={clazz}>
          <Header changeLikeState={this.changeLikeState} />
          <div className='search-bar'>
          <Search setSearchValue={this.setSearchValue}/>
          <Dropdown data={filterData} />
          </div>
          {data[0].population === 1200 ? <div className='load'><img src={load} alt="load" /></div> : <CountryItem data={filterData} />}
        </body>
    )
  }
}

