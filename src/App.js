import React, { Component } from 'react';

import Filter from './Filter';
import ListView from './ListView';
import Map from './Map';
import * as Api from './FourSquareAPI';
import './App.css';
import * as fsLogo from './images/foursquares.png';


class App extends Component {

  state = {
    locations: [],
    filteredLocations: [],
    cities: [],
    dataLoaded: false,
    loadFailed: false,

  }
  componentDidMount() {
    //Load pzza restaurants in cairo using foursquare
    if (!this.state.dataLoaded) {
      Api.getData("cairo", "pizza").then(response => {
        this.setState({ locations: response });
        this.setState({ filteredLocations: response });
        //extract cities for filteration
        let cities = this.state.locations.map((l) => {
          return l.venue.location.city

        });
        this.setState({
          cities: [...new Set(cities)]
        });
        this.setState({ dataLoaded: true });

        console.log("dataLoaded", this.state.dataLoaded)
        console.log("API: ", this.state.locations);
      }
      ).catch(error => {
        this.setState({ loadFailed: true });
        console.log("loadFailed", this.state.loadFailed);

      });
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
    //Show all locations if default select is selected
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
        <div class="row1">
          {this.state.dataLoaded && !this.state.loadFailed && (
            <div className="left-Panel">
              <header>
                <h3>Cairo Pizza Restaurants</h3>
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
            </div>)}

          {this.state.dataLoaded && !this.state.loadFailed && (
            <Map
              locations={filteredLocations}
              showInfoWindow={this.showInfoWindow}
            ></Map>)
          }
          {this.state.loadFailed && ( <h3 class="error">Api Failed!!!</h3>)}
          {!this.state.dataLoaded && !this.state.loadFailed &&(
            <h3>Loading ..</h3>
          )}
        </div>
        <div class="powered row">
          <img class="logo" src={fsLogo} alt="Powered by foursquare" />
          <h4 class="text">Powered by Foursquare </h4>
        </div>
      </div>
    );
  }
}

export default App;
