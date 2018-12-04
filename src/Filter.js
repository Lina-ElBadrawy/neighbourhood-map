import React, { Component } from 'react';


class Filter extends Component {
   state={
    value:'select'
  }
  /*change(event){
    debugger;
    let city=event.target.value
   // this.setState({value:city});
    this.props.filterLocationsList(city);
  }*/
    render() {
      const { locations, 
        filterLocationsList} = this.props;
      let cities = locations.map((l)=>{
        return l.venue.location.city
         
      });
      let uniqueCities = [...new Set(cities)];
      return (
        <header className="filter">
          <select  onChange={ (event=>filterLocationsList(event.target.value))} >
          <option value="select">Select</option>
          {uniqueCities.map((city) => (
            <option key={city} className="loc-list-item" value={city}
            >
            {city}
            </option>
          ))
          }
          </select>
        </header>
      );
    }
  }
  
  export default Filter;