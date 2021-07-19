import React, { Component } from 'react'
import './index.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Link} from 'react-router-dom'
import StarIcon from '@material-ui/icons/Star';
import hero from '../assets/images/hero.png'
import whyImg from '../assets/images/why.jpg'
import car1 from '../assets/images/car1.jpg'
import car2 from '../assets/images/car2.jpg'
import car3 from '../assets/images/car3.jpg'
import quotes from '../assets/images/quotes.jpg'
import Navbar from './Navbar'
import Footer from './Footer';


export default class Index extends Component {
    render() {
        return (
            <>
            <main>
                {/* Navbar */}
                    <Navbar/>
                {/* Hero */}
                <section className="hero">
                    <div className="hero__cta">
                        <h1>Easy & Reliable 
                            Installment Payment
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Minima assumenda dolorum asperiores minus sequi quae 
                             consequatur iusto aspernatur aliquid eligendi.
                        </p>
                        <button classsName='hero__button'>Buy Now</button>
                    </div>
                    <div className="hero__image">
                        <img src={hero} alt="" />
                    </div>
                </section>
                  </main>
                <div className="container">
                    <section className="search">
                    <input type="text" name="search" id="search" placeholder='what do you need to buy' />
                    <button className="search__btn">Search</button>
                </section>
                </div>

                <section className="why__payington">
                    <div classsName="why__img">
                        <div className="why__bg"></div>
                        <div className="image">
                            <img src={whyImg} alt="why payington" />
                        </div>
                    </div>
                    
                    <div className="why__rightside">
                        <h1>Why Should you choose payingtone?</h1>
                        <div className="thumb">
                            <div className="thumb__img">
                                <ThumbUpIcon/>
                            </div>
                            <div className="thumb__text">
                                <h3>Simple and Flexible</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in.
                                </p>
                            </div>
                        </div>
                        <div className="thumb">
                            <div className="thumb__img">
                                <TouchAppIcon/>
                            </div>
                            <div className="thumb__text">
                                <h3>Simple and Flexible</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in.
                                </p>
                            </div>
                        </div>
                        <Link className="btn__readmore">Read More <ArrowRightAltIcon/></Link>
                    </div>
                </section>
                <section className="choose__product">
                    <div className="choose__title">
                        <span><h1>Choose Product Or Service To Begin</h1></span>
                    </div>
                    <div className="grid">
                    <div className="choose__section">
                        <img src={car1} alt="product1" />
                        <div className="bottom__side">
                            <div  className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            
                            </div>
                             <Link to='/buy/motor'><button classsName='buy__now'>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className="choose__section">
                        <img src={car2} alt="product1" />

                        <div className="bottom__side">
                            <div className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            </div>
                             <Link to='/buy/motor'><button classsName='buy__now'>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className="choose__section">
                        <img src={car3} alt="product1" />

                        <div className="bottom__side">
                            <div className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            </div>
                            <Link to='/buy/motor'><button classsName='buy__now'>Buy Now</button></Link>
                        </div>
                    </div>
                    <div className="choose__section">
                        <img src={car3} alt="product1" />

                        <div className="bottom__side">
                            <div className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            </div>
                            <button classsName='buy__now'>Buy Now</button>
                        </div>
                    </div>
                    <div className="choose__section">
                        <img src={car3} alt="product1" />

                        <div className="bottom__side">
                            <div className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            </div>
                            <button classsName='buy__now'>Buy Now</button>
                        </div>
                    </div>
                    <div className="choose__section">
                        <img src={car3} alt="product1" />

                        <div className="bottom__side">
                            <div className='insurance'>
                                <h2>Insurance</h2>
                                <p>Buy all types of insurance</p>
                            </div>
                            <button classsName='buy__now'>Buy Now</button>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="contact__us">
                    <h3>Not Sure Where to Begin Contact us</h3>
                    <div className="contact">
                        <div className="phone__number">
                            <PhoneIcon style={{color:'#09535E'}}/>
                            <p>+250784532189</p>
                        </div>
                        <div className='contact__or'><p>OR</p></div>
                        <div className="phone__number">
                            <EmailIcon style={{color:'#09535E'}}/>
                            <p>info@insurance.com</p>
                        </div>
                    </div>
                </section>

                <section className="inpartership">
                    <div className="partnership__title">
                        <span><h1>In partnership With</h1></span>
                    </div>
                    <div className='flex'>
                        <ArrowBackIosIcon style={{color: '#09535E'}} />
                        <button className='partner__btn'>Radiant</button>
                        <button className='partner__btn'>Sanlam</button>
                        <button className='partner__btn'>Britam</button>
                        <button className='partner__btn'>Prime</button>
                        <button className='partner__btn'>Sonarwa</button>
                        <ArrowForwardIosIcon style={{color: '#09535E'}} />
                    </div>
                </section>
                <section className="quotes">
                    <div className="container">
                        <div className="quote__flex">
                            <div><Link href="" className="arrow"><ArrowBackIcon/></Link></div>
                            <div className='quotes__container'>
                                <div className="quote__image">
                                    <img src={quotes}  alt="" />
                                </div>
                                <div className="quotes__text">
                                        <div className="content">
                                            <FormatQuoteIcon style={{ fontSize: 70 }} className='newQuotes'/>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                            Quasi est laborum quos repudiandae distinctio,
                                            aperiam deleniti eos id dicta odio.
                                        </p>
                                        <h2>Kamali Ange</h2>

                                        <p className='heading'>payingtone user</p>
                                        <div className="rating">
                                            <StarIcon className='iconz'/>
                                            <StarIcon className='iconz'/>
                                            <StarIcon className='iconz'/>
                                            <StarIcon className='iconz'/>
                                            <StarIcon style={{color:'#C4C4C4'}}/>
                                        </div>
                                        </div>
                                    </div>
                            </div>  

                            <div> <Link href="" className='arrow'><ArrowForwardIcon/></Link></div>

                        </div>
                    </div>
                </section>
                <Footer/>
          
            </>
        )
    }
}
