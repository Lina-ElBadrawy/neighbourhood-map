import React, { Component } from 'react';


class Filter extends Component {
 
    render() {
      const { locations, 
        cities,
        filterLocationsList} = this.props;
    
      let uniqueCities = [...new Set(cities)];
      return (
        <section className="filter-section">
          <select className="select"  onChange={ (event=>filterLocationsList(event.target.value))} >
          <option value="select">Select</option>
          {cities.map((city) => (
            <option key={city} className="loc-list-item" value={city}
            >
            {city}
            </option>
          ))
          }
          </select>
        </section>
      );
    }
  }
  
  export default Filter;