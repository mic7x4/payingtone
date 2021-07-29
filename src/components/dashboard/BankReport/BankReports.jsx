import { Link } from 'react-router-dom'
import { Print } from '@material-ui/icons'
import React from 'react'
import ContentNav from '../contentNav/ContentNav'
import TransactionTable from '../TransactionTable'
import './BankReports.css'

function BankReports() {
    return (
        <div className='bank__reports'>
            <ContentNav 
                title='Bank Reports' 
                content='Here are all your transactions youve done so far'
            />
            <div className="reports__header mt__30">
                <div className="header__leftbtn">
                <Link to='/dashboard/reports' className="report__header1 active">
                    Bank Report
                </Link>
                <Link to='/dashboard/insurance' className="report__header1">
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
            <div className='report__table'>
                <TransactionTable/>
            </div>
        </div>
    )
}

export default BankReports
