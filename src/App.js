
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/news';
import Assistant from './component/assistant';
export default class App extends Component {
  render() {
    return (
      <div>
      <Assistant/>
       <Navbar />
       <News />
      </div>
    )
  }
}

