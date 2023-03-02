import React, { Component } from 'react'

export default class newsitem extends Component {
  
  render() {
    let {title,desc,src,newsurl}=this.props;
    return(
      <> <div className="card my-3" style={{width: "18"}}>
      <img src={src} className="card-img-top" alt="cannot load image" />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{desc}...</p>
        <a href={newsurl} target='_blank' className="btn btn-primary">READ</a>
      </div>
    </div></> 
    )
  }
}
