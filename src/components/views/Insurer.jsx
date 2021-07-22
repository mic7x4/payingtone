import React,{Component} from 'react'
import Footer from '../Footer'
import SanLam from '../../assets/images/sanlam.svg'
import MayFair from '../../assets/images/mayfair.svg'
import './Insurer.css'
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection'


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
         <GreenNav/>
            <AfterNavSection
                heading='Choose insurer'
                paragraph='Select an insurance company'
            />
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
