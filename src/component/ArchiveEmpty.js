import React, { Component } from 'react'

export default class ArchiveEmpty extends Component {
  componentDidMount()
  {
    document.getElementById("clearsession").style.display="none";



  }
  render() {
    return (
      
       <div className="flex-container">
  <div className="flex-items item ">404 <br/>THERE IS NOTHING TO SHOW</div>

        
      </div>
    )
  }
}
