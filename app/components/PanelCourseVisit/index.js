import React, { Component } from 'react';
import { getUserList } from '../../util'

class PanelCourseVisit extends Component {
    state = {  }

    getUserList(courses) {
      // console.log(users)
        return(
          courses.map((course) => { return(
          <tr key={course.title}>
            <td>{course.title}</td>
            <td>{course.episode_id}</td>
            <td>{course.characters.length}</td>

          </tr>
          )})
        )
    }

    render() {      

      const {courseList} = this.props
      
      return ( 
            <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <h4 className="">What courses do your user visit?</h4>
            </div>
          </div>
          <div className="card md-card md-card-rounded">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-no-border">Users</th>
                    <th className="table-no-border">Completed</th>
                    <th className="table-no-border">Points</th>
                  </tr>
                </thead>
                <tbody className="text-primary">
                  <tr></tr>
                  <tr></tr>
                  {this.getUserList(courseList.courses)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
         );
    }
}
 
export default PanelCourseVisit;