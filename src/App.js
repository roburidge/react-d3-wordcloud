import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './containers/Topics';
import { MetaList } from './components/MetaList';

export default class App extends Component {
  state = {
    selectedTopic: null,
  };

  updateTopic = topic => {
    this.setState({ selectedTopic: topic });
  };

  render() {
    return (
      <div className="c-app">
        <div className="c-app__header">
          <img src={logo} className="c-app__logo" alt="logo" />
          <h2>React D3 Word Cloud</h2>
        </div>
        <div className="c-app__main-content">
          <Topics data="./data/topics.json" updateTopic={this.updateTopic} />
          <MetaList topic={this.state.selectedTopic} />
        </div>
      </div>
    );
  }
}
