import { Link } from 'react-router-dom'
import { Print } from '@material-ui/icons'
import React from 'react'
import ContentNav from '../contentNav/ContentNav'
import './InsuranceReport.css'
import InsuraceReportTable from '../InsuranceReportTable'

function InsuranceReport() {
    return (    
        <div className='insurace__report'>
            <ContentNav 
                title='Insurance Reports' 
                content='Here are all your Reports'
            />
            
            <div className="reports__header mt__30">
                <div className="header__leftbtn">
                <Link to='/dashboard/reports' className="report__header1">
                    Bank Report
                </Link>
                <Link to='/dashboard/insurance' className="report__header1 active">
                    Bank Insurance
                </Link>
                <Link to='/dashboard/productreport' className="report__header1">
                    Product Report
                </Link>
                </div>
                <div className="headear__leftPrint">
                    <Print fontSize='large' className='printer'/>
                </div>
            </div>
            <div className="insurance__table__holder">
                <InsuraceReportTable/>
            </div>
        </div>
    )
}

export default InsuranceReport
