import {Link} from 'react-router-dom';
import Assistant from './assistant'
export default function Navbar() {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Categories</ Link > 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">General</ Link >
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="sports">Sports</ Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="tech">Tech</ Link >
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="entatainment">Entertainment</ Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="health">Health</ Link >
        </li> 
         <li className="nav-item">
          <Link className="nav-link" to="buisness">Business</ Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="archive">Archived</ Link >
        </li> 
        <li className="nav-item" id="assisttoggle">
{/*        
<div className="custom-control custom-switch  nav-link">
  <input type="checkbox" className="custom-control-input"  id="toggle"/>
  <label className="custom-control-label" >Disable assist</label>
</div> */}

   
        </li>  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
