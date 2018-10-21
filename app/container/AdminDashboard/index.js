import React, { Component } from 'react';

import Navbar from '../../components/Navbar'
import BodyContainer from '../../components/BodyContainer'
import Sidebar from '../../components/Sidebar'
import PanelPageview from '../../components/PanelPageview'
import PanelContainer from '../../components/PanelContainer'
import PanelRow from '../../components/PanelRow'
import PanelSummaryStat from '../../components/PanelSummaryStat'
import PanelCourseVisit from '../../components/PanelCourseVisit'
import PanelCourseStatTab from '../../components/PanelCourseStatTab'
import PanelTitle from '../../components/PanelTitle'
import Footer from '../../components/Footer'

class AdminDashboard extends Component {

    state = {  }

    componentDidMount() {
        console.log("Dispatch Load User Info");                
        console.log("Dispatch Load stats");                
    }

    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                <BodyContainer>
                    <Sidebar/>
                    <PanelContainer>
                        <PanelRow>
                            <PanelTitle title="Codemi Home"/> 
                            <PanelSummaryStat/>
                            <PanelPageview/>
                        </PanelRow>
                        <PanelRow>
                            <PanelCourseVisit/>
                            <PanelCourseVisit/>
                        </PanelRow>          
                        <PanelRow>
                            <PanelTitle title="What courses do your user visit?"/>                  
                            <PanelCourseStatTab/>
                        </PanelRow>              
                    </PanelContainer>
                </BodyContainer>
                <Footer></Footer>
            </React.Fragment>
         );
    }
}
 
export default AdminDashboard;