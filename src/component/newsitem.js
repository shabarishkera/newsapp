
import React, { Component } from 'react'

export default class newsitem extends Component {
archive=(data)=>{
  var number=sessionStorage.length;
window.sessionStorage.setItem(number,data);
/// several objects are stored in the session storage .
//when user want to view the arcived promt to a diffret componet which displays all the seesionStorage objects
//data gets stored in session storage multiple times
}
  render() {
    let {title,desc,src,newsurl}=this.props;
    return(
      <> <div className="card my-3" style={{width: "18"}}>
      <img src={src} className="card-img-top" alt="can't load " />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{desc}...</p>
        <div className='d-flex justify-content-center'>
        <a href={newsurl} target='_blank' className="btn btn-primary">READ</a>
        <button type="button" className="btn btn-primary mx-2 archiveclass"  onClick={(event)=>{ 
          var number=sessionStorage.length;
          event.target.style.display="none";     
window.sessionStorage.setItem(number,JSON.stringify(this.props)); }}>Archive</button>
        </div>
      </div>
    </div></> 
    )
  }
}
