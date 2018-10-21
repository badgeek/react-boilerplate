import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar.js'
import BodyContainer from '../../components/BodyContainer/BodyContainer.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import PanelPageview from '../../components/PanelPageview/PanelPageview.js'
import PanelContainer from '../../components/PanelContainer/PanelContainer.js'
import PanelRow from '../../components/PanelRow/PanelRow.js'
import PanelSummaryStat from '../../components/PanelSummaryStat/PanelSummaryStat.js'
import PanelCourseVisit from '../../components/PanelCourseVisit/PanelCourseVisit.js'
import PanelCourseStatTab from '../../components/PanelCourseStatTab/PanelCourseStatTab.js'
import PanelTitle from '../../components/PanelTitle/PanelTitle.js'
import Footer from '../../components/Footer'

class AdminDashboard extends Component {
    state = {  }
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