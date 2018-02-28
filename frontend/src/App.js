import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Header from './component/Header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: {}
    }
  }

  componentWillMount() {
    // here we can start a loading animation
    console.log('componentWillMount')
  }

  componentDidMount() {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data })
      })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Edited!!!</p>
        <p>{JSON.stringify(this.state.movies)}</p>
      </div>
    );
  }
}

export default App;
