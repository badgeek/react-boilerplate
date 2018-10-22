import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doFetchActiverUser, doFetchCourse } from './actions'

import '../../../node_modules/bootstrap/js/dist/dropdown';

import Navbar from '../../components/Navbar'
import BodyContainer from '../../components/BodyContainer'
import Sidebar from '../../components/Sidebar'
import PanelActiveUser from '../../components/PanelActiveUser'
import PanelContainer from '../../components/PanelContainer'
import PanelRow from '../../components/PanelRow'
import PanelSummaryStat from '../../components/PanelSummaryStat'
import PanelCourseVisit from '../../components/PanelCourseVisit'
import PanelCourseStatTab from '../../components/PanelCourseStatTab'
import PanelTitle from '../../components/PanelTitle'
import Footer from '../../components/Footer'
import { throws } from 'assert';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchActiveUser: () => {
            dispatch(doFetchActiverUser())
        },
        fetchCourse: () => {
            dispatch(doFetchCourse())
        }        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeUser: state.activeuser.users_data,
        courseList: state.course
    }
}

class App extends Component {

    state = {  }

    componentDidMount() {    
        this.props.fetchActiveUser()
        this.props.fetchCourse()      
    }

    render() { 

        const {activeUser, courseList} = this.props

        return ( 
                <React.Fragment>
                    <Navbar/>
                    <BodyContainer>
                        <Sidebar/>
                        <PanelContainer>                        
                            <PanelRow>
                                <PanelTitle title="Codemi Home"/> 
                                <PanelSummaryStat/>
                                <PanelActiveUser activeUser={activeUser} />
                            </PanelRow>                        
                            <PanelRow>
                                <PanelCourseVisit courseList={courseList}/>
                                <PanelCourseVisit courseList={courseList}/>
                            </PanelRow>          
                            <PanelRow>
                                <PanelTitle  title="What courses do your user visit?"/>                  
                                <PanelCourseStatTab courseList={courseList}/>
                            </PanelRow>             
                        </PanelContainer>
                    </BodyContainer>
                    <Footer></Footer>   
                </React.Fragment>                
         );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);