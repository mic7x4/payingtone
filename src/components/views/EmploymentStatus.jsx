import React from 'react'
import './EmploymentStatus.css'
import {Link } from 'react-router-dom'
import Footer from '../Footer'
import Individual from  '../../assets/images/chevloret6.jpg'
import GreenNav from './GreenNav'



function EmploymentStatus() {
    return (
       <div>
           <GreenNav/>
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
