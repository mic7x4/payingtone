import React from 'react'
import './ContactUs.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'
import Location from '../../assets/images/location.svg'
import Email from '../../assets/images/email.svg'
import Phone from '../../assets/images/phone.svg'

function ContactUs() {
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
                <h1>Contact Us</h1>
                <p>Keep in touch with PayingTone by contacting us here</p>
                </div>
            </section>
            <section className="get__intouch">
                <div className="container">
                    <div className="intouch__content">
                    <div className="intouch__green">
                        <div className="location">
                            <img src={Location} alt="" />
                            <div className="location__text">
                                <p>KG 5 Ave - Gate 82</p>
                                <p>Kigali - Gasabo</p>
                            </div>
                        </div>
                        <div className="emai">
                            <img src={Email} alt="" />
                            <p>info@ignace.com</p>
                        </div>
                        <div className="phone">
                            <img src={Phone} alt="" />
                            <div className="phone__text">
                                <p>+250 788 000 000</p>
                                <p>+250 788 000 000</p>
                            </div>
                        </div>
                    </div>
                    <div className="get__container">
                        <h1>Get in Touch</h1>
                        <p>Send us your message here we're be in touch </p>

                        <div className="intouch__group">
                            <input 
                                type="email" 
                                name="email" 
                                className='intouch__control' 
                                placeholder='Email'
                            />
                        </div>
                        <div className="textarea__touch">
                            <textarea 
                                name="message"
                                 cols="30" 
                                 rows="10"
                                 className='touch__textarea'
                                 placeholder='Message'
                                 >        
                            </textarea>
                        </div>
                        <button className='intouch__btn'>Send messages</button>
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ContactUs
