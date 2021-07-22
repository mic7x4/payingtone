import React from 'react'
import './AboutUs.css'
import Footer from '../Footer'
import African1 from '../../assets/images/africanone.svg'
import Vision from '../../assets/images/vision.jpg'
import Process from '../../assets/images/process.png'
import Touch from '../../assets/images/touch.svg'
import Processfile from '../../assets/images/processfile.svg'
import Processhome from '../../assets/images/processhome.svg'
import Processdetails from '../../assets/images/processdetail.svg'
import GreenNav from './GreenNav'

function AboutUs() {
    return (
        <div>
            <GreenNav/>
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
