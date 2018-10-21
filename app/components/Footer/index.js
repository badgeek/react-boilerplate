import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return ( 
            <div className="bg-dark text-white bg-gradient">
    <div className="container">
      <div className="row">
        <div className="p-4 col-md-3">
          <h2 className="mb-4 text-white">codemi</h2>
          <p className="text-white">We craft a web based Learning Management System</p>
        </div>
        <div className="p-4 col-md-3">
          <h2 className="mb-4 text-white">sitemap</h2>
          <ul className="list-unstyled">
            <a href="#" className="text-white">Home</a>
            <br/>
            <a href="#" className="text-white">About us</a>
            <br/>
            <a href="#" className="text-white">Our services</a>
            <br/>
            <a href="#" className="text-white">Stories</a>
          </ul>
        </div>
        <div className="p-4 col-md-3">
          <h2 className="mb-4">contact</h2>
          <p>
            <a href="tel:+246 - 542 550 5462" className="text-white">
              <i className="fa d-inline mr-3 text-secondary fa-phone"></i>+</a>62 811 268 995</p>
          <p>
            <a className="text-white">
              <i className="fa d-inline mr-3 text-secondary fa-envelope-o"></i>info@codemi.co.id</a>
          </p>
          <p>
            <a href="https://goo.gl/maps/AUq7b9W7yYJ2" className="text-white" target="_blank">
              <i className="fa d-inline mr-3 fa-map-marker text-secondary"></i>Y</a>ogyakarta</p>
        </div>
        <div className="p-4 col-md-3">
          <h2 className="mb-4 text-light">subscribe</h2>
          <form>
            <fieldset className="form-group text-white">
              <label for="exampleInputEmail1">Get our newsletter</label>
              <input className="form-control" placeholder="Enter email" type="email"/> </fieldset>
            <button type="submit" className="btn btn-outline-light">Submit</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-3">
          <p className="text-center text-white">© Copyright 2018 Codemi - All rights reserved. </p>
        </div>
      </div>
    </div>
  </div>
          );
    }
}
 
export default Footer;