import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Nav />
          <h2>The Quarantine Times</h2>
        </div>
        <p className="App-intro">
          We know the stories before you know the stories
        </p>
      </div>
    );
  }
}

export default App;
