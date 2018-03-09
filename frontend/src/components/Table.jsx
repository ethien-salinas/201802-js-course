import React, { Component } from 'react';

class Table extends Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>title</td>
            <td>imdbId</td>
            <td>releaseDate</td>
            <td>releaseCountry</td>
            <td>releaseYear</td>
            <td>releaseMonth</td>
            <td>releaseDay</td>
          </tr>
        </thead>
        <tbody>
            {this.props.elements.map(element => {
              return (
                <tr>
                  <td>{element.title}</td>
                  <td>{element.imdbId}</td>
                  <td>{element.releaseDate}</td>
                  <td>{element.releaseCountry}</td>
                  <td>{element.releaseYear}</td>
                  <td>{element.releaseMonth}</td>
                  <td>{element.releaseDay}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }
}

export default Table;
