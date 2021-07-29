import { Print } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import ContentNav from '../contentNav/ContentNav'
import './ProductReport.css'
import ProductReportTable from '../ProductReportTable'

function ProductReport() {
    return (
        <div className='product__report'>
            <ContentNav 
                title='Product Reports' 
                content='Here are all your products report'
            />  
            <div className="reports__header mt__30">
                <div className="header__leftbtn">
                <Link to='/dashboard/reports' className="report__header1">
                    Bank Report
                </Link>
                <Link to='/dashboard/insurance' className="report__header1 ">
                    Bank Insurance
                </Link>
                <Link to='/dashboard/productreport' className="report__header1 active">
                    Product Report
                </Link>
                </div>
                <div className="headear__leftPrint">
                    <Print fontSize='large' className='printer'/>
                </div>
            </div>
            <div className="product__table__holder">
                <ProductReportTable/>
            </div>
        </div>
    )
}

export default ProductReport
