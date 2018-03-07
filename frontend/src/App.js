import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header'
import Table from './components/Table'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      title: 'Title from App'
    }
  }

  componentWillMount() {
    // here we can start a loading animation
    console.log('componentWillMount')
  }

  componentDidMount() {
    fetch('http://localhost:4000/movies?page_offset=3&page_limit=6')
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
        <p>{
          //JSON.stringify(this.state.movies)
          }</p>
        <Table elements={this.state.movies} />
      </div>
    );
  }
}

export default App;
