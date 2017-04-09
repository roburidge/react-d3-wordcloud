import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Topics from './containers/Topics'
import { MetaList } from './components/MetaList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React D3 Word Cloud</h2>
        </div>
        <div style={{width: '98%', maxWidth: 1200, margin: '40px auto'}}>
          <Topics data="./data/topics.json" />
          <MetaList />
        </div>
      </div>
    )
  }
}
