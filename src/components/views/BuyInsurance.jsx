import React, { Component } from 'react'
import Footer from '../Footer'
// import Navbar from '../Navbar'
import './BuyInsurance.css'
import chevloret from  '../../assets/images/chevloret6.jpg'
import InsuranceLogo from  '../../assets/images/insuranceLogo.png'
import { Link } from 'react-router-dom'

export default class BuyInsurance extends Component {
    render() {
        return ( 
            <>
            <div className='buy__insurance'> 
                <div className="background"></div>
               <div className="container">
                    <div className='nav__holder'>
                     <nav className="navbar__clean">
                    <div className='navbar__logo'>
                        <Link to='/'> <img src={InsuranceLogo} alt="" /> </Link>
                    </div>
                    <div className='navbar__link'>
                        <ul className='navbar__ul'>
                            <li className='navbar__item'>
                                <Link  className='navbar__link whites'>Home</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link whites'>Manage</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link whites'>Buy</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link whites'>About Us</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link whites'>Contact Us</Link>
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
               </div>
                <div className="container">
                    <div className='insurance__text'>
                    <h1>Buy Insurance</h1>
                    <h6>Choose insurance you want to buy and continue</h6>
                </div>
                {/* Search Component */}
                <div className="search__container">
                    <input 
                        type="text" 
                        placeholder='enter an insurance you need'
                        className='search__input'
                    />
                    <button className='search__btn'>Search</button>
                </div>
                </div>
            </div>
            <section className="buyInsurances">
                <div className="buy__container">
                    <h1>Buy Insurance</h1>
                    <div className="cards">
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={chevloret} alt="" />
                            <div className="contents">
                                <div className="insurances__content">
                                    <h3>Motor Insurance</h3>
                                    <p>
                                        From 100,000 to 1,000,000
                                    </p>
                                </div>
                                <div className="call__toaction">
                                    <Link to='/buy/plan'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </>
        )
    }
}
