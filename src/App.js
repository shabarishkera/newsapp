
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/news';
import Assistant from './component/assistant';
import links from './component/apikey'
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
       
       <Route  exact  path='/' element={<News key={"home"} url={links.general}/>} />
       <Route  exact path='sports' element={<News key={"sports"}  url={links.bitcoin}/>} />
       <Route  exact  path='buisness' element={<News key={"buisness"} url={links.buisness}/>} />
       <Route  exact  path='tech' element={<News key={"tech"} url={links.tech}/>} />
    
       </Routes>
       </Router>
      </div>
    )
  }
}

