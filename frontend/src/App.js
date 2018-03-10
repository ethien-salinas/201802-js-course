import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header'
import Table from './components/Table'
import TablePaginator from './components/TablePaginator'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      links: []
    }
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  getElementsAndUpdate(url) {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.data,
          links: response.links
        })
      })
  }

  componentWillMount() {
    // here we can start a loading animation
    console.log('componentWillMount')
  }

  componentDidMount() {
    const url = 'http://localhost:4000/movies/paginator'
    this.getElementsAndUpdate(url)
  }

  handleNavigationClick = param => e => {
    e.preventDefault();
    const url = `${this.state.links[param]}`
    this.getElementsAndUpdate(url)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <section className="section">
          <div className="container">
            <h1 class="title">Movies</h1>
            <Table elements={this.state.movies} />
            <TablePaginator
              handleNavigationClick={this.handleNavigationClick}
              links={this.state.links} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
