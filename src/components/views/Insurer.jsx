import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'
import SanLam from '../../assets/images/sanlam.svg'
import MayFair from '../../assets/images/mayfair.svg'
import './Insurer.css'


 class Insurer extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
    render() {
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
                <h1>Choose insurer</h1>
                <p>Select an insurance company</p>
                </div>
            </section>
            <section className="insurrer__section">
                <div className="container">
                    <div className="insurrer__grid">
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={SanLam} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
                            </div>
                        </div>
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={SanLam} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
                            </div>
                        </div>
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={SanLam} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
                            </div>
                        </div>
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={MayFair} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
                            </div>
                        </div>
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={SanLam} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
                            </div>
                        </div>
                        <div className="insurrer__card">
                            <div className="img__container">
                                <img src={SanLam} alt="" />
                            </div>
                            <div className="insurer__contents">
                                <h2>Sanlam Insurance</h2>
                                <p>3 Insurance plans available</p>
                                <p>From 1000,000 to 1,000,000</p>
                            </div>
                            <div className="insurrer__btn">
                                <button className='insurrer__cta'>Select</button>
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
}

export default Insurer
