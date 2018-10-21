import React, { Component } from 'react';

class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-expand-md navbar-codemi navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo.png" className="d-inline-block align-top" alt="" width="100"/>
           </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item text-dark">
              <a className="nav-link" href="#">
                <i className="fa d-inline fa-lg fa-bell-o"></i> </a>
            </li>
            <li className="nav-item ml-2  navbar-btn btn-secondary dropdown">
        <a className="nav-link dropdown-toggle text-white " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa d-inline fa-lg fa-user-circle-o"></i> Budi P
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>

          </ul>

        </div>
      </div>
    </nav>
    );
  }
}
 
export default Navbar;
 
