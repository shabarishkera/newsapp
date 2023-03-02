import React, { Component } from 'react'
import Newsitem from './newsitem'
import defaultimage from '../defualtimage.png'
 

import Spinner  from './spinner'
export default class news extends Component {


   defaulturl=defaultimage;
  constructor(props)
  {

    super();

    this.state={ 
      articles:[],
    loading:false,
  page:1,
  pagesize:20,
  url:props.url
  }


  }
  handlenext= async ()=>{
  
    document.documentElement.scrollTop=0;
    let data=await fetch(this.state.url+"&page="+(this.state.page+1)+"&pagesize=20");
    this.setState({loading:true});
    let jsondata=await data.json();
    
    this.setState({articles:jsondata.articles,page:this.state.page+1})
    console.log("lenth of article"+this.state.articles.length);
    this.setState({loading:false});
    if(this.state.articles.length<20)
    {
   document.getElementById("nextbtn").disabled=true;
    }
  }
  handleprev= async()=>{
    document.documentElement.scrollTop=0;
    this.setState({loading:true});
    let data=await fetch(this.state.url+"&page="+(this.state.page-1)+"&pagesize=20");
    let jsondata=await data.json();
    this.setState({loading:false});
    this.setState({page:this.state.page-1,articles:jsondata.articles});
    if(document.getElementById("nextbtn").disabled==true)
    document.getElementById("nextbtn").disabled=false;
  }
   movetop=()=>{
   document.documentElement.scrollTop=0;


     }

   async componentDidMount()
  {   this.setState({loading:true})
    let data=await fetch(this.state.url);
      let jsondata=await data.json();
    this.setState({loading:false})
    this.setState({articles:jsondata.articles})
    
  }
  render() {

    return (
       
      <div className='container my-3'>
        <div className=''>
        <svg  width="46" height="46" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>
  <div className="headding mx-3 my-3"><h2> #<span>D</span>aily news</h2></div>

  </div>
  <hr/>
  <hr/>
  {this.state.loading?<Spinner />:null}
  
        <div className='row'>
          {!this.state.loading&&this.state.articles.map((element)=>{
           return <div  key={element.url} className='col-md-3'>
            <Newsitem title={element.title?element.title.slice(0,40):""} desc={element.description?element.description.slice(0,90):""} src={element.urlToImage?element.urlToImage:this.defaulturl} newsurl={element.url}/>
              </div>
          })}
        
        </div>
        <hr/>
        <div className="d-flex justify-content-center footer">.
        <button type="button" align="left" disabled={this.state.page<=1} className="btn btn-primary " onClick={this.handleprev}> &larr; previous </button>
        <button type="button"  align="right" className="btn btn-primary mx-4 " onClick={this.movetop}>back to top</button>
        <button type="button" id="nextbtn" align="right" className="btn btn-primary " onClick={this.handlenext}>next &rarr; </button>

        
        </div>

        </div>
      
    )
  }
}

