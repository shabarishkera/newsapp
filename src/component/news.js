import React, { Component } from 'react'
import Newsitem from './newsitem'

  import url from './apikey'
 


export default class news extends Component {


   defaulturl="https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/raw-gold-55156544_Large.jpg"
  constructor()
  {
    super();
    this.state={ 
      articles:[],
    loading:false,
  page:1,
  pagesize:20,
  
  }


  }
  handlenext= async ()=>{
  
    document.documentElement.scrollTop=0;
    let data=await fetch(url+"&page="+(this.state.page+1)+"&pagesize=20");
    let jsondata=await data.json();
    
    this.setState({articles:jsondata.articles,page:this.state.page+1})
    if(this.state.articles.length<20)
   document.documentElementById("nextbtn").disabled=true;
   
  }
  handleprev= async()=>{
    document.documentElement.scrollTop=0;
    let data=await fetch(url+"&page="+(this.state.page+1)+"&pagesize=20");
    let jsondata=await data.json();
    this.setState()
    this.setState({page:this.state.page-1,articles:jsondata.articles});
    if(document.documentElementById("nextbtn").disabled==true)
    document.documentElementById("nextbtn").disabled=false;
  }
   movetop=()=>{
   document.documentElement.scrollTop=0;


     }

   async componentDidMount()
  {
    let data=await fetch(url);
    let jsondata=await data.json();
    this.setState({articles:jsondata.articles})
  }
  render() {

    return (
       
      <div className='container my-3'>
  <div className="headding mx-3 my-3"><h2> #<span>D</span>aily news</h2></div>
  <hr/>
  <hr/>
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div  key={element.url} className='col-md-3'>
            <Newsitem title={element.title?element.title.slice(0,40):""} desc={element.description?element.description.slice(0,90):""} src={element.urlToImage?element.urlToImage:this.defaulturl} newsurl={element.url}/>
              </div>
          })}
        
        </div>
        <hr/>
        <div className="d-flex justify-content-center">.
        <button type="button" align="left" disabled={this.state.page<=1} className="btn btn-primary " onClick={this.handleprev}> &larr; previous </button>
        <button type="button"  align="right" className="btn btn-primary mx-4 " onClick={this.movetop}>back to top</button>
        <button type="button" id="nextbtn" align="right" className="btn btn-primary " onClick={this.handlenext}>next &rarr; </button>

        
        </div>

        </div>
      
    )
  }
}

