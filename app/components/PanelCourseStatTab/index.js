import React, { Component } from 'react';

class PanelCourseStatTab extends Component {
    render() { 
        return ( 
<div className="col-md-12">
    <div className="card md-card md-card-rounded">
        <div className="card-body">
            <div style={{width: 98 + '%'}} id="stacked"></div>
        </div>
    </div>
</div>
         );
    }
}
 
export default PanelCourseStatTab;