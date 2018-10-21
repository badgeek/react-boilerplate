import React, { Component } from 'react';


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  makeWidthFlexible
} from 'react-vis';

import "../../../node_modules/react-vis/dist/style.css";

const FlexibleXYPlot = makeWidthFlexible(XYPlot); 


class PanelPageview extends Component {
    state = {  }
    render() { 
        return ( 
        // <!-- PAGEVIEW PER MINUTE -->
        <div className="col-md-4">
          <div className="card md-card bg-secondary md-card-rounded h-100">
            <div className="card-header bg-secondary"> Active Users right now</div>
            <div className="card-body bg-secondary p-2">
              <h1 className="my-1">479</h1>
              <h6 className="text-light">Page Views per minute</h6>
              <hr className="bg-light my-2"/>
              
              <div id="bar-mini-chart" className="">
              
              <FlexibleXYPlot margin={{ left: 0, right: 0, bottom:4, top: 0 }} height={100} stackBy="y">
          <VerticalBarSeries data={
            [
              {x: 0, y: 12},
              {x: 1, y: 12}, 
              {x: 3, y: 2}, 
              {x: 5, y: 5},
              {x: 6, y: 8},
              {x: 7, y: 3},
              {x: 8, y: 5},
              {x: 9, y: 7},
              
            ]} />
        </FlexibleXYPlot>
      

              </div>
              
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