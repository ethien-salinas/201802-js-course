import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Edited!!!</p>
      </div>
    );
  }
}

export default App;
