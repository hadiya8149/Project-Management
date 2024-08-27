import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../index.css'
export default function Navbar(){
    return (
        <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <Link className="navbar-brand"  to="/">DeskUs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
           
              <li className="nav-item">
                <Link className="nav-link" to="/link">Features</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link " to="/" tabIndex="-1" aria-disabled="true">Product Guide</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link " to="/" tabIndex="-1" >Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/" tabIndex="-1" >Support</Link>
              </li>
            </ul>
            <form className="d-flex get-started"style={{marginLeft:'32px'}}>
              <Link to="/login" className="get-started-link" style={{marginLeft:'25px', marginRight:'25px'}} type="submit">Get Started</Link>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <Outlet/>
      </div>
        </div>
      
    );
}