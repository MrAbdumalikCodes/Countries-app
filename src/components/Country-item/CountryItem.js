import React, { Component } from 'react'
import '../Country-item/CountryItem.scss'

export default class CountryItem extends Component {
  render() {
      const { data } = this.props
      console.log(data);
      
    return (
        <div className='box-card'>
           {
            data.map(country => (
                <div className='country-card'>
                <div className='country-image'><img src={country.flags.svg} alt="" /></div>
                <div className='country-data'>
                    <h3>{country.name}</h3>
                    <div className='info'>
                    <h6>Population: <span>{country.population}</span></h6>
                    <h6>Region: <span>{country.region}</span></h6>
                    <h6>Capital: <span>{country.capital}</span></h6>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
  }
}
