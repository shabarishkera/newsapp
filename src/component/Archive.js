import React, { Component } from 'react'
import Newsitem from './newsitem';

import ArchiveEmpty from './ArchiveEmpty';
export default class Archive extends Component {
    constructor ()
    {
      super()
       this.state={
            articles:[]

        }
    }
    componentDidMount()
    {
      var values=[];
        for( let key=0 ;key<sessionStorage.length;key++)
        {   
            values.push(JSON.parse(sessionStorage.getItem(key)));
           

        }
       this.setState({articles:values})
    }
    componentDidUpdate()
    {
   let  list=document.getElementsByClassName("archiveclass");
   for( let item of list)  
   {
    item.style.display="none";
   }

    }
  render() {
    return (
     <div>
       



<button type="button"  id="clearsession"className="btn btn-warning" onClick={(elem)=>{window.sessionStorage.clear(); window.location.reload()}}>clear Achived</button>
{!window.sessionStorage.length?<ArchiveEmpty />:null}
         <div className='row'>
          {this.state.articles.map((element)=>{
           return <div  key={element.newsurl} className='col-md-3'>
            <Newsitem title={element.title?element.title.slice(0,40):""} desc={element.desc?element.desc.slice(0,90):""} src={element.src?element.src:this.defaulturl} newsurl={element.newsurl}/>
              </div>
          })}
        
        </div>
      </div>
    )
  }
}

