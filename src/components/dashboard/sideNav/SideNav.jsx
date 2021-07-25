import React from 'react'
import {Link} from 'react-router-dom'
import './SideNav.css'
import sideNavLogo from '../../../assets/images/greenlogo.svg'
import { AddShoppingCart, CheckBox, Dashboard, FileCopy, InsertDriveFile, Textsms, ViewList } from '@material-ui/icons'

function SideNav() {
    return (
        <div className='sideNav'>
            <div className="sidenav__wrapper">
                <Link to='/'>
                    <img  className="sidenav__logo" src={sideNavLogo} alt="logo" />
                </Link>
                <Link className="sideNav__button">
                    <Dashboard/><span>Summary</span>
                </Link>
                <Link className='sideNav__buyBtn'>
                    <AddShoppingCart className='sidebar__green'/><span>Buy</span>
                </Link>
                <ul className='sidebar__list'>
                    <li className='sidebar__listItem'>
                        <AddShoppingCart className='sidebar__green'/> My Cart
                    </li>
                    <li className='sidebar__listItem'>
                        <FileCopy className='sidebar__green'/> My Cart
                    </li>
                    <li className='sidebar__listItem'>
                        <ViewList className='sidebar__green'/> Products
                    </li>
                    <li className='sidebar__listItem'>
                        <CheckBox className='sidebar__green'/> Transactions
                    </li>
                    <li className='sidebar__listItem'>
                        <InsertDriveFile className='sidebar__green'/> Make a claim
                    </li>
                    <li className='sidebar__listItem'>
                        <Textsms className='sidebar__green'/> Message & offers
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
