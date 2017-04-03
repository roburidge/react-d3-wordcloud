import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './containers/Topics';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React D3 Word Cloud</h2>
        </div>
        <p className="App-intro">
          A generic Wordcloud component renderd by a Topics container:
        </p>
        <Topics data="./data/topics.json" />
      </div>
    );
  }
}
