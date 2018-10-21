import React, { Component } from 'react';

class SummaryStat extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-8">
            <div className="card md-card md-card-rounded h-200 h-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="text-secondary">Users</h6>
                    <h3 className="text-secondary">
                      <b>58K</b>
                    </h3>
                  </div>
                  <div className="col-md-3">
                    <h6>Course Completed</h6>
                    <h3 className="">5,700</h3>
                  </div>
                  <div className="col-md-3">
                    <h6>Learning Plan</h6>
                    <h3 className="">1,120</h3>
                  </div>
                  <div className="col-md-3">
                    <h6>Learning Hour</h6>
                    <h3 className="">22 m 40s</h3>
                  </div>
                </div>
                <div id="line-chart"></div>
              </div>
            </div>
          </div>
         );
    }
}
 
export default SummaryStat;