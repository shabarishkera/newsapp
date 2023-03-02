
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/news';
import Assistant from './component/assistant';
import Url from './component/apikey'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
      <Assistant/>
      

       <Router>
       <Navbar />
       <Routes>
      
       <Route  exact path='/' element={<News url={Url}/>} />
       <Route exact path='sports' element={<News Url/>} />
       <Route  exact path='buisness' element={<News Url/>} />
       <Route  exact path='entatainment' element={<News Url/>} />
       <Route  exact path='tech' element={<News Url/>} />
       </Routes>
       </Router>
      </div>
    )
  }
}

