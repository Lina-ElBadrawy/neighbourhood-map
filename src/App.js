import React, { Component } from 'react';

import Filter from './Filter';
import ListView from './ListView';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Filter></Filter>
      <ListView></ListView>
      <Map></Map>
      </div>
    );
  }
}

export default App;
