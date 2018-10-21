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
import { getUserList } from '../../util'

const FlexibleXYPlot = makeWidthFlexible(XYPlot); 

class PanelActiveUser extends Component {

    getChart(userList) {
      const data = userList.map( (user, idx) => {return  {x:idx, y:parseInt(user.height)} } )
      return(                
      <FlexibleXYPlot margin={{ left: 0, right: 0, bottom:4, top: 0 }}  color="#8EB6F9" height={100} stackBy="y">
        <VerticalBarSeries data={data} />
      </FlexibleXYPlot>
      )
    }

    getUserList(users) {
      // console.log(users)
        return(
          users.slice(0,5).map((user) => { return(
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.height}</td>
          </tr>
          )})
        )
    }

    render() { 

        const {activeUser, userList} = this.props

        return ( 
        // <!-- PAGEVIEW PER MINUTE -->
        <div className="col-md-4">
          <div className="card md-card bg-secondary md-card-rounded h-100">
            <div className="card-header bg-secondary"> Active Users right now</div>
            <div className="card-body bg-secondary p-2">
              <h1 className="my-1">{activeUser.active_user}</h1>
              <h6 className="text-light">Page Views per minute</h6>
              <hr className="bg-light my-2"/>
              
              <div id="bar-mini-chart" className="">
                {this.getChart(activeUser.user_list)}
              </div>
              
              <table className="table table-sm text-light">
                <thead>
                  <tr>
                    <th className="table-no-border">Top Active Page</th>
                    <th className="table-no-border">Active User</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getUserList(activeUser.user_list)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        /* <!-- PAGEVIEW PER MINUTE --> */        
        )}
}
 
export default PanelActiveUser;