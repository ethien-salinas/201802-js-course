import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <figure className="image is-128x128">
              <img src={logo} className="App-logo" alt="logo" />
            </figure>
            <h1 className="title">React App</h1>
            <h2 className="subtitle">with bulma</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;
