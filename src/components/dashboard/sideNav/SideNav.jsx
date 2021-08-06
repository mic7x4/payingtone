import React from 'react'
import {Link} from 'react-router-dom'
import './SideNav.css'
import sideNavLogo from '../../../assets/images/greenlogo.svg'
import { AddShoppingCart, CheckBox, Dashboard, FileCopy, InsertDriveFile, Textsms, ViewList } from '@material-ui/icons'

function SideNav() {
    return (
      <div className="sideNav">
        <div className="sidenav__wrapper">
          <Link to="/">
            <img className="sidenav__logo" src={sideNavLogo} alt="logo" />
          </Link>
          <Link to="/dashboard" className="sideNav__button">
            <Dashboard />
            <span>Summary</span>
          </Link>
          <Link className="sideNav__buyBtn">
            <AddShoppingCart className="sidebar__green" />
            <span>Buy</span>
          </Link>
          <ul className="sidebar__list">
            <Link to="/dashboard/myproducts" className="sidebar__listItem">
              <AddShoppingCart className="sidebar__green" /> My Cart
            </Link>
            <Link to="/dashboard/insurance" className="sidebar__listItem">
              <FileCopy className="sidebar__green" /> My Insurances
            </Link>
            <Link to="/dashboard/myproducts" className="sidebar__listItem">
              <ViewList className="sidebar__green" />
              My Products
            </Link>
            <Link to="/dashboard/profile" className="sidebar__listItem">
              <ViewList className="sidebar__green" />
              My Profile
            </Link>
            <Link to="/dashboard/reports" className="sidebar__listItem">
              <ViewList className="sidebar__green" />
              My Reports
            </Link>
            <Link to="/dashboard/transaction" className="sidebar__listItem">
              <CheckBox className="sidebar__green" /> Transactions
            </Link>
            <Link to="/dashboard/insuranceClaim" className="sidebar__listItem">
              <InsertDriveFile className="sidebar__green" /> Make a claim
            </Link>
            <Link to="/dashboard/messaging" className="sidebar__listItem">
              <Textsms className="sidebar__green" /> Message & offers
            </Link>
          </ul>
        </div>
      </div>
    );
}

export default SideNav
