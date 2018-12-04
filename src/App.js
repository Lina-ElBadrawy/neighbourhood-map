import React, { Component } from 'react';

import Filter from './Filter';
import ListView from './ListView';
import Map from './Map';
import * as Api from './FourSquareAPI';
import './App.css';

class App extends Component {

  state = {
    locations: [],


  }


  componentDidMount() {
    Api.getData("cairo", "burger").then(response => {
      this.setState({ locations: response });
      console.log(this.state.locations);
    }
    );
  }

  showInfoWindow = (location) => {
    this.setState((state) => ({
      locations: state.locations.map(l => {
        l.show = !location.show && l.venue.id === location.id
        return l
      })
    }));

  }
  filterLocationsList = (city) => {
    console.log("lina")
    this.setState((state) => ({
      locations: state.locations.filter((l) => (l.venue.location.city === city))

    }))
    console.log(this.state.locations);
  }


  render() {
    const filteredLocations = this.state.locations;
    return (
      <div className="app">
        <Filter
          locations={filteredLocations}
          filterLocationsList={this.filterLocationsList}
        >

        </Filter>
        <ListView
          locations={filteredLocations}
          showInfoWindow={this.showInfoWindow}
        ></ListView>
        <Map
          locations={filteredLocations}
          showInfoWindow={this.showInfoWindow}
        ></Map>
      </div>
    );
  }
}

export default App;
