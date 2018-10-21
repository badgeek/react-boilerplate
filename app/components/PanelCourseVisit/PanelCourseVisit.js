import React, { Component } from 'react';

class PanelCourseVisit extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h4 className="">Who is your most active user?</h4>
            </div>
          </div>
          <div className="card md-card md-card-rounded">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-no-border">Users</th>
                    <th className="table-no-border">Completed</th>
                    <th className="table-no-border">Points</th>
                  </tr>
                </thead>
                <tbody className="text-primary">
                  <tr></tr>
                  <tr></tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
         );
    }
}
 
export default PanelCourseVisit;