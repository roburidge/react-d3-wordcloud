import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Topics from './containers/Topics'
import { MetaList } from './components/MetaList'

export default class App extends Component {
  state = {
    selectedTopic: null,
  }

  updateTopic = (topic) => {
    this.setState({selectedTopic: topic})
  }

  render() {
    console.log(this.state.selectedTopic)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React D3 Word Cloud</h2>
        </div>
        <div style={{width: '98%', maxWidth: 1200, margin: '40px auto'}}>
          <Topics data="./data/topics.json" updateTopic={this.updateTopic} />
          <MetaList topic={this.state.selectedTopic} />
        </div>
      </div>
    )
  }
}
