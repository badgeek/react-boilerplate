import React, { Component } from 'react';

class PanelTitle extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="col-md-12">
            <h4 className=""> {this.props.title} </h4>
        </div>
         );
    }
}
 
export default PanelTitle;