import React, { Component } from 'react';

import Filter from './Filter';
import ListView from './ListView';
import Map from './Map';
import * as Api from './FourSquareAPI';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    filteredLocations: [],
    cities: [],
    dataLoaded: false


  }


  componentDidMount() {
    if (!this.state.dataLoaded) {
      Api.getData("cairo", "burger").then(response => {
        this.setState({ locations: response });
        this.setState({ filteredLocations: response });
        let cities = this.state.locations.map((l) => {
          return l.venue.location.city

        });
        this.setState({
          cities: [...new Set(cities)]
        });
        this.setState({ dataLoaded: true });
        console.log("API: ", this.state.locations);
      }
      );
    }


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
    if (city != "select") {
      this.setState((state) => ({
        filteredLocations: state.locations.filter((l) => (l.venue.location.city === city))
      }))
    }
    else this.setState({ filteredLocations: this.state.locations });

    console.log(this.state.filteredLocations);
  }


  render() {
    const locations = this.state.locations;
    const filteredLocations = this.state.filteredLocations;

    const cities = this.state.cities;
    return (
      <div className="app">
        <div className="left-Panel">
          <header>
            <h3>Cairo Burger Restaurants</h3>
          </header>
          <Filter

            cities={cities}
            filterLocationsList={this.filterLocationsList}
          >

          </Filter>
          <ListView
            locations={filteredLocations}
            showInfoWindow={this.showInfoWindow}
          ></ListView>
           </div>
          <Map
            locations={filteredLocations}
            showInfoWindow={this.showInfoWindow}
          ></Map>
        </div>
     
    );
  }
}

export default App;
