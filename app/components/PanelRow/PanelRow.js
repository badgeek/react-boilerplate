import React, { Component } from 'react';

class PanelRow extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="row p-2">
            {this.props.children}
        </div>
        )}
}
 
export default PanelRow;