import React from 'react'
import './EmploymentStatus.css'
import {Link } from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'
import Individual from  '../../assets/images/chevloret6.jpg'



function EmploymentStatus() {
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
            
            <section>
                <div  className="text__ins">
                <h1>Who are you?</h1>
                <p>Select What is best describes you!</p>
                </div>
            </section>
                <section className="employment__statuses">
                    <div className="container">
                        <div className="employ__status">
                            <div className="cards">
                                <div className="card green">
                                    <img src={Individual} alt="" />
                                    <div className="contents green">
                                        <Link className="individual__status">
                                            Individual
                                        </Link>
                                    </div>
                                </div>
                                <div className="card green">
                                    <img src={Individual} alt="" />
                                    <div className="contents green">
                                        <Link className="company__status">Company</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <section>
                <Footer/>
            </section>
       </div>
    )
}

export default EmploymentStatus
