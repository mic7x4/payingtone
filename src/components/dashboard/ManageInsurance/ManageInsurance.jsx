import { Link } from '@material-ui/core'
import { Accessibility, Home, LocalTaxi, Whatshot } from '@material-ui/icons'
import React from 'react'
import ContentNav from '../contentNav/ContentNav'
import './ManageInsurance.css'
import Table from '../../dashboard/Table'

function ManageInsurance() {
    return (
        <div className='manage__insurance'>
            <ContentNav 
                title='My Insurances' 
                content='Here are all your insurances own and their details'
            />
            <div className="manage__insurance__container">
               <div className="insurance__labels">
                   <Link className='insurance__label'>
                       <div className="insurancelabel__img">
                           <LocalTaxi/>
                       </div>
                       <div className="motar__text">
                           <h2>Motor Insurance</h2>
                           <p>3 Months remaining</p>
                       </div>
                   </Link>
                   <Link className='insurance__label'>
                       <div className="insurancelabel__img">
                           <Home/>
                       </div>
                       <div className="motar__text">
                           <h2>Property Insurance</h2>
                           <p>3 Months remaining</p>
                       </div>
                   </Link>
                   <Link className='insurance__label'>
                       <div className="insurancelabel__img">
                           <Accessibility/>
                       </div>
                       <div className="motar__text">
                           <h2>Life Insurance</h2>
                           <p>3 Months remaining</p>
                       </div>
                   </Link>
                   <Link className='insurance__label'>
                       <div className="insurancelabel__img">
                           <Whatshot/>
                       </div>
                       <div className="motar__text">
                           <h2>Fire Insurance</h2>
                           <p>3 Months remaining</p>
                       </div>
                   </Link>
               </div>
            </div>
            <div className="manageInsurance__table">
                <Table/>
                <br/>
            </div>
        </div>
    )
}

export default ManageInsurance
