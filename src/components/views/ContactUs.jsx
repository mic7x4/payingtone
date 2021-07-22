import React from 'react'
import './ContactUs.css'
import Footer from '../Footer'
import Location from '../../assets/images/location.svg'
import Email from '../../assets/images/email.svg'
import Phone from '../../assets/images/phone.svg'
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection'

function ContactUs() {
    return (
        <div>
            <GreenNav/>
            <AfterNavSection
                heading='Contact Us'
                paragraph='Keep in touch with PayingTone by contacting us here'
            />
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
