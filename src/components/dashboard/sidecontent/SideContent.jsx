import React from 'react'
import ContentNav from '../contentNav/ContentNav'
import ContentHolder from '../contents/ContentHolder'
import './SideContent.css'
function SideContent({title,content}) {
    return (
        <div className='dashboard__sidecontent'>
            <ContentNav 
                title='Welcome David' 
                content='Welcome back to payingtone mr Kayi David'
            />
            <ContentHolder/>
        </div>
    )
}

export default SideContent
