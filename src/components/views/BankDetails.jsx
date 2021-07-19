import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'


export class BankDetails extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
    render() {
        const {values,handleChange} =  this.props;
        return ( <>
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
                <h1>Bank Details</h1>
                <p>Complete this form with required employment information</p>
                </div>
            </section>
            <div className="signup__form">
              <div className="right__cta">
                <h4>Bank information</h4>
              </div>
        <form action="">
            <div className='form__group'>
              <select className="form__control" name='bankName' 
                defaultValue=''>
                <option value='none'>Bank Name</option>
                <option value='male'>Equity</option>
                <option value='female'>Bk</option>
              </select>
            </div>
            <div className='form__group'>
              <select className="form__control" name='accountType' 
                defaultValue=''>
                <option value='none'>Account Type</option>
                <option value='male'>Individual</option>
                <option value='female'>Blocked</option>
              </select>
            </div>
            <div className='form__group'>
                <input 
                type="text" name='accountNumber' 
                defaultValue={values.fullAddress}
                onChange={handleChange('accountNumber')}
                className='form__control' 
                placeholder='Account Number' />
            </div>
            
            <div className='form__group'>
              <select className="form__control" name='currency' 
                defaultValue=''>
                <option value='none'>Currency</option>
                <option value='male'>Rwf</option>
                <option value='female'>Dollars</option>
              </select>
            </div>
                <div className="form__group">
                  <button onClick={this.continue} className='continue__btn'>Submit</button>
                </div>
                <div className="form__group"> 
                  <button onClick={this.continue} className='continue__btn'>Add Bank</button>
                </div>
        </form>
            </div>
            <section>
                <Footer/>
            </section>
        </>
        )
    }
}

export default BankDetails
