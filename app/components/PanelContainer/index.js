import React, { Component } from 'react';

class PanelContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col main-col py-3">
                {this.props.children}
            </div>
         );
    }
}
 
export default PanelContainer;