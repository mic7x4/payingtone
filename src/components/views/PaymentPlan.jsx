import React from 'react'
import './PaymentPlan.css'
import Footer from '../Footer'
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection'

function PaymentPlan() {
    return (
        <div>
            <GreenNav/>
            <AfterNavSection
                heading='Tarrif'
                paragraph='Choose the right payment plan according to what suits you'
            />
            <section>
            <section className="payment__plan">
                <div className="container">
                    <div className="payment__plangrid">
                        <div className="plan__card">
                            <h1>Basic</h1>
                            <p>Minimum Plan</p>
                            <p className='plan__heading'>100,000</p>
                            <div className="plan__content">
                                <h1>100,000 Rwf</h1>
                                <p>per basic plan in a year</p>
                                <button className="plan__btn">Choose plan</button>
                            </div>
                        </div>
                        <div className="plan__card">
                            <h1>Basic</h1>
                            <p>Medium Plan</p>
                            <p className='plan__heading'>350,000</p>
                            <div className="plan__content">
                                <h1>350,000 Rwf</h1>
                                <p>per medium plan in a year</p>
                                <button className="plan__btn">Choose plan</button>
                            </div>
                        </div>
                        <div className="plan__card">
                            <h1>Basic</h1>
                            <p>Maximum Plan</p>
                            <p className='plan__heading'>1,000,000</p>
                            <div className="plan__content">
                                <h1>100,000 Rwf</h1>
                                <p>per basic plan in a year</p>
                                <button className="plan__btn">Choose plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="basic__plan">
               <div className="container">
                   <div className="plan__contentz">
                    <div className="green__text">
                        <p>Basic Plan <span>________</span></p>
                    </div>
                    <div className="plan__basic">
                        <h1>Basic plan Features</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Beatae consequatur
                            ullam minus corrupti praesentium enim est 
                            quibusdam inventore, debitis aperiam!
                        </p>
                        <ul>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                        </ul>
                    </div>
                    <div className="plan__empy"></div>
                    </div>
               </div>
            </section>
            <section className="basic__plan">
               <div className="container">
                   <div className="plan__contentz">
                    <div className="plan__empy"></div>
                    <div className="plan__medium">
                        <h1>Medium plan Features</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Beatae consequatur
                            ullam minus corrupti praesentium enim est 
                            quibusdam inventore, debitis aperiam!
                        </p>
                        <ul>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                        </ul>
                    </div>
                    <div className="green__text">
                        <p>Medium Plan <span>______</span></p>
                    </div>
                    </div>
               </div>
            </section><section className="basic__plan">
               <div className="container">
                   <div className="plan__contentz">
                    <div className="green__text">
                        <p>Maximum Plan <span>____</span></p>
                    </div>
                    <div className="plan__basic">
                        <h1>Maximum plan Features</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Beatae consequatur
                            ullam minus corrupti praesentium enim est 
                            quibusdam inventore, debitis aperiam!
                        </p>
                        <ul>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                            <li> <span></span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione?</li>
                        </ul>
                    </div>
                    <div className="plan__empy"></div>
                    </div>
               </div>
            </section>
                <Footer/>
            </section>
            </div>
    )
}

export default PaymentPlan
