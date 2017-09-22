import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Potential Narvar India Office Locations</h2>
        </div>
        <Map />
      </div>
    );
  }
}

export default App;
