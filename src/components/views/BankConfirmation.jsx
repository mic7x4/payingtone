import React from 'react'
import './BankConfirmation.css'
import {Link} from 'react-router-dom'
import GreenLogo from '../../assets/images/greenlogo.svg'
import FooterLogo from '../../assets/images/footerlogo.png'
import Download from '../../assets/images/download.png'
import Footer from '../Footer'

function BankConfirmation() {
    return (
        <div>
          <div className="motorimsurance__bg">
                <div className="background__ins"></div>
                <div className="container ">
                <span className='nav__holder'>
                    <div className="container">
                   <nav className="motorInsurance clean">
                    <div className='navbar__logo'>
                        <Link to='/'> <img src={GreenLogo} alt="" /> </Link>
                    </div>
                    <div className='navbar__link'>
                        <ul className='navbar__ul'>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Home</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Manage</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Buy</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>About Us</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__signin">
                        <button className="sign__btn">
                            <Link to='/login'>Sign In</Link>
                        </button>
                    </div>
                </nav>
               </div>
                </span>
                </div>
            </div>
            <section className='bank__confirmation'>
                <div className="container bank__center">
                    <div className="text__wrapper">
                        <h1>Bank Confirmation</h1>
                        <p>20-07-2021</p>

                        <div className="bank__letter">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Dicta natus voluptate iure unde quae vitae praesentium quaerat
                                 consectetur beatae odio!
                            </p>
                            <span className="sincerely">
                                Best regards
                            </span>
                            <img src={FooterLogo} className='bank__logo' alt="" />
                        </div>
                    </div>
                <button className='dashboard__btn'>Go to dashboard</button>
                </div>
            </section>
            <section className="download__letter ">
                <div className="container download__center">
                    <button className="download__this">
                    <img src={Download} alt="" /> 
                    <span>Download this letter</span>
                </button>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default BankConfirmation
