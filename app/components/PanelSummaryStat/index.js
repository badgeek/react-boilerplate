import React, { Component } from 'react';
import {curveCatmullRom} from 'd3-shape';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  makeWidthFlexible
} from 'react-vis';

import "../../../node_modules/react-vis/dist/style.css";
  
const FlexibleXYPlot = makeWidthFlexible(XYPlot); 


class SummaryStat extends Component {
    state = {  }
    render() { 
      const useCanvas = false;

      const Line = LineSeries;

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
                
                <div className="w-100" id="line-chart">

        <FlexibleXYPlot height={400}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" position="start" />
          <YAxis title="Y Axis" />
          <Line
            className="first-series"
            data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
          />
          <Line
            className="fourth-series"
            style={{
              // note that this can not be translated to the canvas version
              strokeDasharray: '2 2'
            }}
            data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
          />
        </FlexibleXYPlot>



                </div>

              </div>
            </div>
          </div>
         );
    }
}
 
export default SummaryStat;