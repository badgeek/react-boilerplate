import React, { Component } from 'react';


class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            // <!-- SIDEBAR BEGIN -->
            <div id="sidebar-container" className="sidebar-expanded d-none d-md-block col-2 md-card">
            {/* <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' --> */}
            {/* <!-- Bootstrap List Group --> */}
            <ul className="list-group sticky-top sticky-offset">
                {/* <!-- Separator with title --> */}
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small className="text-primary">HOME</small>
                </li>
                {/* <!-- /END Separator --> */}
                {/* <!-- Separator with title --> */}
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>Learning</small>
                </li>
                {/* <!-- /END Separator --> */}
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-book fa-fw mr-3"></span>
                    <span className="menu-collapsed">Courses</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-road fa-fw mr-3"></span>
                    <span className="menu-collapsed">Learning Path</span>
                </div>
                </a>
                {/* <!-- Separator with title --> */}
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>Manage</small>
                </li>
                {/* <!-- /END Separator --> */}
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-user fa-fw mr-3"></span>
                    <span className="menu-collapsed">Users</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-bicycle fa-fw mr-3"></span>
                    <span className="menu-collapsed">Skills</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-flag fa-fw mr-3"></span>
                    <span className="menu-collapsed">Reports</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Analytics</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-stack-exchange fa-fw mr-3"></span>
                    <span className="menu-collapsed">Announcements</span>
                </div>
                </a>
                {/* <!-- Separator with title --> */}
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>Configure</small>
                </li>
                {/* <!-- /END Separator --> */}
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Points</span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-trophy fa-fw mr-3"></span>
                    <span className="menu-collapsed">Rewards
                    <br/> </span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">Email Templates
                    <br/> </span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">Company Info
                    <br/> </span>
                </div>
                </a>
                <a href="#" className="bg-white list-group-item list-group-item-action text-dark">
                <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">Billing
                    <br/> </span>
                </div>
                </a>
                {/* <!-- Logo --> */}
            </ul>
            {/* <!-- List Group END--> */}
            </div>
            // <!-- SIDEBAR END -->
         );
    }
}
 
export default Sidebar;