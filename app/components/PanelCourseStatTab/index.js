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


    getChart(courses) {

        const data = courses.map( (course, idx) => {return {x:idx, y:course.starships.length}} )

        return(
            <FlexibleXYPlot color="rgb(91, 174, 243)" margin={{ left: 0, right: 0, bottom:0, top: 0 }} height={430} stackBy="y">
            <HorizontalGridLines />
            <XAxis title="Courses" position="start" />
          <YAxis title="Visits" />
            <VerticalBarSeries data={data} />
          </FlexibleXYPlot>
        
        )
    }

    render() { 

        const {courseList} = this.props;

        return ( 
<div className="col-md-12">
    <div className="card md-card md-card-rounded">
        <div className="card-body">
            <div style={{width: 98 +'%'}} id="stacked">
                {this.getChart(courseList.courses)}
            </div>
        </div>
    </div>
</div>
         );
    }
}
 
export default PanelCourseStatTab;