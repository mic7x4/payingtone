import React from 'react'
import {Link} from 'react-router-dom'
import GreenLogo from '../../assets/images/greenlogo.svg'
import './MotorInsurance.css'
import Footer from '../Footer'

function MotorInsurance() {
    return (
        <div className='hidden'>
            {/* Green Navbar */}
            <div className="motorimsurance__bg">
                
                <div className="background__ins"></div>
                <div className="container">
                    
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
                <h1>Motor Insurance</h1>
                <p>Complete the form below with required information to continue</p>
                </div>
            </section>

        <section className="insurance__details">
            <div className="container">
            <div className="details__background"></div>
                <div className="details__container">
                    <div className="left__side">
                        <h2>More Details</h2>
                        <form action="">
                            <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                </select>
                            </div>
                             <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                </select>
                            </div>
                             <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical brand</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                </select>
                            </div>
                             <div className='form__group white'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Vehicle Version'
                                />
                            </div>
                             <div className='form__group'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Year of manufacture'
                                />
                            </div>
                             <div className='form__group'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Vehicle plate number'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='ins__rightside'>

                    </div>
                </div>
            </div>
        </section>
        <section >
            <Footer/>
        </section>
        </div>
    )
}

export default MotorInsurance
