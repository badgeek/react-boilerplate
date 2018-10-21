import React, { Component } from 'react';

class PanelPageview extends Component {
    state = {  }
    render() { 
        return ( 
        // <!-- PAGEVIEW PER MINUTE -->
        <div className="col-md-4">
          <div className="card md-card md-card-rounded h-100">
            <div className="card-header bg-secondary"> Active Users right now</div>
            <div className="card-body bg-secondary p-2">
              <h1 className="my-1">479</h1>
              <h6 className="text-light">Page Views per minute</h6>
              <hr className="bg-light my-2"/>
              <div style={{height:200 + 'px'}} id="bar-mini-chart" className="my-2"></div>
              <table className="table table-sm text-light">
                <thead>
                  <tr>
                    <th className="table-no-border">Top Active Page</th>
                    <th className="table-no-border">Active User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        /* <!-- PAGEVIEW PER MINUTE --> */        
        )}
}
 
export default PanelPageview;