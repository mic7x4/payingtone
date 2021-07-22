import React from 'react'
import './BankConfirmation.css'
import Footer from '../Footer'
import FooterLogo from '../../assets/images/footerlogo.png'
import Download from '../../assets/images/download.png'
import GreenNav from './GreenNav'

function BankApproval() {
    return (
         <div>
             <GreenNav/>
            <section className='bank__confirmation'>
                <div className="container bank__center">
                    <div className="text__wrapper">
                        <h1>Bank Approval</h1>
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

export default BankApproval
