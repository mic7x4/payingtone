import { Print } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import ContentNav from '../contentNav/ContentNav'
import MyproductsTable from '../MyproductsTable'
import './Myproducts.css'

function Myproducts() {
    return (
        <div className='myproducts'>
            <ContentNav 
                title='Product Reports' 
                content='Here are all your products'
            />
            <div className="reports__header mt__30">
                <div className="header__leftbtn">
                <Link to='/dashboard/myproducts' className="report__header1 active">
                    My Products
                </Link>
                <Link to='/dashboard/myinsurance' className="report__header1 ">
                    My subscription
                </Link>
                </div>
                <div className="headear__leftPrint">
                    <Print fontSize='large' className='printer'/>
                </div>
            </div>
            <div className="myproduct__table__holder">
                <MyproductsTable/>
            </div>
        </div>
    )
}

export default Myproducts
