import React from 'react'
import {Link} from 'react-router-dom'
import './PaymentMethod.css'
import GreenLogo from '../../assets/images/greenlogo.svg'
import Wallet from '../../assets/images/wallet.svg'
import Bk from '../../assets/images/bk.png'
import Footer from '../Footer'

function PaymentMethod() {
    return ( 
    <>
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
                <h1>Payment Method</h1>
                <p>Choose the right payment method for you</p>
                </div>
            </section>
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
