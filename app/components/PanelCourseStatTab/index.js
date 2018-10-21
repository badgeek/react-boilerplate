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

  
class PanelCourseStatTab extends Component {
    render() { 
        return ( 
<div className="col-md-12">
    <div className="card md-card md-card-rounded">
        <div className="card-body">
            <div style={{width: 98 +'%'}} id="stacked">
                   <FlexibleXYPlot margin={{ left: 0, right: 0, bottom:0, top: 0 }} height={430} stackBy="y">
          <HorizontalGridLines />
          <XAxis />
          <VerticalBarSeries data={
            [{
              x: 2, y: 12}, 
              {x: 3, y: 2}, 
              {x: 5, y: 5},
              {x: 6, y: 8},
              {x: 7, y: 3},
              {x: 8, y: 5},
              {x: 9, y: 7},
              
            ]} />
        </FlexibleXYPlot>
      
            </div>
        </div>
    </div>
</div>
         );
    }
}
 
export default PanelCourseStatTab;