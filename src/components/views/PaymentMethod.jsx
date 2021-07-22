import React from 'react'
import {Link} from 'react-router-dom'
import './PaymentMethod.css'
import Wallet from '../../assets/images/wallet.svg'
import Bk from '../../assets/images/bk.png'
import Footer from '../Footer'
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection'

function PaymentMethod() {
    return ( 
    <>
        <GreenNav/>
            <AfterNavSection
                heading='Payment Method'
                paragraph='Choose the right payment method for you'
            />
            <section className="payment__method">
                <div className="container">
                    <h1 className='method__text'>- Direct payment -</h1>
                    <div className="all__methods">
                        <Link className="direct__one">
                            <img src={Wallet} alt="" />
                            <p>Amount : 350,000Rwf </p>
                        </Link>
                        <Link className="direct__two">
                            <h3>Pay Directly</h3>
                        </Link>
                        <Link className="direct__three">
                            <img src={Bk} alt="" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="installment__container">
                <div className="container">
                    <div className="installments">
                        <div className="installement__text">
                            <h1>-Installments Payment</h1>
                            <p>Pay the price in fixed installment ins specific Period!</p>
                        </div>
                        <div className="all__installments">
                            <div className="installements__card">
                                <div className="installment__txt">
                                    <h1>3</h1><span className='installment__paragraph'>Months Plan</span>
                                </div>
                                <p className='payment__money'>You'll pay 150,000Rwf/month</p>
                                <p className='payment__money'>small installment period</p>
                                <button className='installment__btn'>Choose</button>
                            </div>
                            <div className="installements__card">
                                <div className="installment__txt">
                                    <h1>3</h1><span className='installment__paragraph'>Months Plan</span>
                                </div>
                                <p className='payment__money'>You'll pay 150,000Rwf/month</p>
                                <p className='payment__money'>small installment period</p>
                                <button className='installment__btn'>Choose</button>
                            </div>
                            <div className="installements__card">
                                <div className="installment__txt">
                                    <h1>3</h1><span className='installment__paragraph'>Months Plan</span>
                                </div>
                                <p className='payment__money'>
                                    You'll pay 150,000Rwf/month
                                </p>
                                <p className='payment__money'>
                                    small installment period
                                </p>
                                <button className='installment__btn'>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default PaymentMethod
