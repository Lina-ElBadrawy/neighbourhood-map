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
    Api.getData("zamalek", "burger").then(response => {
      this.setState({ locations: response });
      console.log(this.state.locations);
    }
    );
  }

  showInfoWindow=(location)=>{
    this.setState((state) => ({
      locations: state.locations.map(l => ({ ...l, show: (!location.show  && l.venue.id === location.id) }))
      /*locations: state.locations.map(l => {
        console.log(l);
        if(l.venue.name==location.name){
          l.show=!l.show;
        }
        return l
      })*/
    }));

}
 

  render() {
    const filteredLocations= this.state.locations;
    return (
      <div className="app">
        <Filter></Filter>
        <ListView></ListView>
        <Map
          locations={filteredLocations}
          showInfoWindow={this.showInfoWindow}
        ></Map>
      </div>
    );
  }
}

export default App;
