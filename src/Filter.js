import React, { Component } from 'react';


class Filter extends Component {
  /* state={
    value:'select'
  }
  change(event){
    debugger;
    let city=event.target.value
   // this.setState({value:city});
    this.props.filterLocationsList(city);
  }*/
    render() {
      const { locations, 
        cities,
        filterLocationsList} = this.props;
    
      let uniqueCities = [...new Set(cities)];
      return (
        <header className="filter">
          <select  onChange={ (event=>filterLocationsList(event.target.value))} >
          <option value="select">Select</option>
          {cities.map((city) => (
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