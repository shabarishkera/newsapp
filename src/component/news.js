import React, { Component } from 'react'
import Newsitem from './newsitem'

  import url from './apikey'
 

export default class news extends Component {
  articles= [

    
    {
        
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Samuel Gibbs Consumer technology editor",
        "title": "Mac mini M2 review: Apple’s cheaper, tiny but mighty computer",
        "description": "Power upgrade makes smallest Mac desktop more adaptable and better value alternative to iMacApple’s cheapest desktop computer has had a price cut and a power upgrade – making it one of the smallest, cheapest and most adaptable Macs yet.The Mac mini starts at …",
        "url": "https://www.theguardian.com/technology/2023/feb/13/apple-mac-mini-m2-review-cheaper-tiny-but-mighty-computer",
        "urlToImage": "https://i.guim.co.uk/img/media/bcf33f7e757ae5bdd2cc16c89c9cfd7c462df17c/0_189_5387_3232/master/5387.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTUucG5n&enable=upscale&s=056e4e2ba426e086f726bd5cff9f02b9",
        "publishedAt": "2023-02-13T07:00:47Z",
        "content": "Apples cheapest desktop computer has had a price cut and a power upgrade making it one of the smallest, cheapest and most adaptable Macs yet.\r\nThe Mac mini starts at £649 ($599/A$999) £50 less than t… [+5897 chars]"
    }]
   defaulturl="https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/raw-gold-55156544_Large.jpg"
  constructor()
  {super();
   this.state={articles:this.articles,
  loading:false}


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
        <div className='row'>
          {this.state.articles.map((element)=>{
           return <div  key={element.url} className='col-md-3'>
            <Newsitem title={element.title?element.title.slice(0,40):""} desc={element.description?element.description.slice(0,90):""} src={element.urlToImage?element.urlToImage:this.defaulturl} newsurl={element.url}/>
              </div>
          })}
        
        </div>
        </div>
      
    )
  }
}

