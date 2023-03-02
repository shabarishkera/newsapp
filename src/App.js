
import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/news';
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
      
      

       <Router>
       <Navbar />
       <Routes>
       
       <Route  exact  path='/' element={<News key={"top_headlines"} url={links.general}/>} />
       <Route  exact  path='sports' element={<News key={"sports"}  url={links.sports}/>} />
       <Route  exact  path='buisness' element={<News key={"buisness"} url={links.buisness}/>} />
       <Route  exact  path='tech' element={<News key={"tech"} url={links.tech}/>} />
       <Route  exact  path='entatainment' element={<News key={"entatainment"} url={links.entatainment}/>} />
       <Route  exact  path='health' element={<News key={"health"} url={links.health}/>} />
    
       </Routes>
       </Router>
      </div>
    )
  }
}

