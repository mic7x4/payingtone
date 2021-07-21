import React from 'react'
import './AboutUs.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'
import African1 from '../../assets/images/africanone.svg'
import Vision from '../../assets/images/vision.jpg'
import Process from '../../assets/images/process.png'
import Touch from '../../assets/images/touch.svg'
import Processfile from '../../assets/images/processfile.svg'
import Processhome from '../../assets/images/processhome.svg'
import Processdetails from '../../assets/images/processdetail.svg'

function AboutUs() {
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
                <h1>About Us</h1>
                <p>Keep in touch with payingtone by knowing us well!</p>
                </div>
            </section>
            <section className="our__mission">
                <div className="container mission__flex">
                <div className="green__imagecontainer">
                    <div className="mission__green"></div>
                    <img src={African1} className='mission__image' alt="" />
                </div>
                <div className="ourmission__content">
                    <div className="mission__text">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                   
                </div>
                </div>
            </section>
            
            <section className="our__mission">
                <div className="container mission__flex">
                <div className="ourmission__content">
                    <div className="mission__text">
                        <h1>Our Vision</h1>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                   
                </div>
                <div className="green__imagecontainer">
                    <div className="mission__green"></div>
                    <img src={Vision} className='mission__image' alt="" />
                </div>
                </div>
            </section>
            <section className="our__mission">
                <div className="container mission__flex">
                <div className="green__imagecontainer">
                    <div className="mission__green"></div>
                    <img src={Process} className='mission__image' alt="" />
                </div>
                <div className="ourmission__content">
                    <div className="mission__text">
                        <h1>Our Process</h1>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                    <div className="mission__p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam blanditiis animi, harum et quo eos eum. 
                        Reiciendis sint modi id!
                    </p>
                    </div>
                   
                </div>
                </div>
            </section>
            <section className="our__process">
                <div className="container">
                <h2 className='process__header'>Our Process</h2>
                <div className="process__flex">
                    <div className="select__insurance">
                    <div className="process__img1">
                        <div className="process__one">
                            <img src={Touch} alt="" />
                        </div>
                        <p className='process__line'>Select Insurance</p>
                    </div>
                </div>
                <span>____________________</span>
                <div className="select__insurance">
                    <div className="process__img1">
                        <div className="process__one">
                            <img src={Processhome} alt="" />
                        </div>
                        <p className="process__line">Select Insurance</p>
                    </div>
                </div>
                <span>____________________</span>
                <div className="select__insurance">
                    <div className="process__img1">
                        <div className="process__one">
                            <img src={Processdetails} alt="" />
                        </div>
                        <p className="process__line">Select Insurance</p>
                    </div>
                </div>
                <span>____________________</span>
                <div className="select__insurance">
                    <div className="process__img1">
                        <div className="process__one">
                            <img src={Processfile} alt="" />
                        </div>
                        <p className="process__line">Select Insurance</p>
                    </div>
                </div>

                </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default AboutUs
