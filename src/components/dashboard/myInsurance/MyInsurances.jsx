import { Print } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import ContentNav from '../contentNav/ContentNav'
import './MyInsurances.css'
import MySubscribtionTable from '../MySubscribtionTable'

function MyInsurances() {
    return (
        <div className='my__insurances'>
            <ContentNav 
                title='My Subscription' 
                content='Here are all your subscription own and their details'
            />
            <div className="reports__header mt__30">
                <div className="header__leftbtn">
                <Link to='/dashboard/myproducts' className="report__header1">
                    My Products
                </Link>
                <Link to='/dashboard/myinsurance' className="report__header1 active">
                    My subscription
                </Link>
                </div>
                <div className="headear__leftPrint">
                    <Print fontSize='large' className='printer'/>
                </div>
            </div>
            <div className="myinsurance__table__holder">
                <MySubscribtionTable/>
            </div>
        </div>
    )
}

export default MyInsurances
