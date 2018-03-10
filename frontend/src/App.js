import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header'
import Table from './components/Table'

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
        <Table elements={this.state.movies} />
        <nav className="pagination is-centered" aria-label="pagination">
          <ul className="pagination-list">
            <li><a className="pagination-link" aria-label="Goto first page" onClick={this.handleNavigationClick('first')}>&laquo;</a></li>
            {this.state.links.prev !== '' &&
              <li><a className="pagination-link" aria-label="Goto prev page" onClick={this.handleNavigationClick('prev')}>&lsaquo;</a></li>
            }
            {this.state.links.next !== '' &&
              <li><a className="pagination-link" aria-label="Goto next page" onClick={this.handleNavigationClick('next')}>&rsaquo;</a></li>
            }
            <li><a className="pagination-link" aria-label="Goto last page" onClick={this.handleNavigationClick('last')}>&raquo;</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
