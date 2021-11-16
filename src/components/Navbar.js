import React from 'react'
import { Link } from 'react-router-dom'
import picture from './movie.jpg'
 const Navbar=()=> {
    return (
      
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
         <div className="container">
         <Link to="/"><img src={picture} alt='hello' width="40"></img></Link>
         
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown">
            <i className="fas fa-bars"></i>
            </div>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/">Home Page</Link>
              <Link className="dropdown-item" to="/abouth">About</Link>
            </div>    
          </li>
        </ul>
        </div>
      </nav>
    )
}
export default Navbar;