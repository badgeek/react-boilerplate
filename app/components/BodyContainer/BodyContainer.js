import React, { Component } from 'react';

class BodyContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row" id="body-row">
                {this.props.children}
            </div>
         );
    }
}
 
export default BodyContainer;