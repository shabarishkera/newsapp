import React, { Component, forwardRef } from 'react'
import Newsitem from './newsitem';
import Spinner from './spinner'
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
      var values=[];var i;
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
        <div className="alert alert-primary" role="alert" onClick={(elem)=>{window.sessionStorage.clear();
        
      //issue not updating after clearing the sessionStrorage..
        }}>
    clear archived news

</div>
{!window.sessionStorage.length?<Spinner />:null}
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

