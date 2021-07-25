import React from 'react'
import SideNav from './sideNav/SideNav'
import './DashboardHome.css'
import SideContent from './sidecontent/SideContent'

function DashboardHome() {
    return (
        <>
        <div className="admin__container">
            <div className="admin__containerbg"></div>
                <SideNav/>
                <SideContent/>
            </div>
        </>
    )
}

export default DashboardHome
