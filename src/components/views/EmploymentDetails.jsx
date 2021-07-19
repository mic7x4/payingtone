import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'


class EmploymentDetails extends Component {
     continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
    render(){
        const {values,handleChange} =  this.props;
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
                <h1>Employment Details</h1>
                <p>Complete this form with required employment information</p>
                </div>
            </section>
            <div className="signup__form">
              <div className="right__cta">
                <h4>Employment info</h4>
              </div>
        <form action="">
            <div className='form__group'>
                <input 
                type="text" name='pemployment' 
                defaultValue={values.fullAddress}
                onChange={handleChange('address')}
                className='form__control' 
                placeholder='Place of employment' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='jtitle' 
                defaultValue={values.fullAddress}
                onChange={handleChange('address')}
                className='form__control' 
                placeholder='Job title' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='monthly' 
                defaultValue={values.fullAddress}
                onChange={handleChange('address')}
                className='form__control' 
                placeholder='Montly Income' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cEnddate' 
                defaultValue={values.fullAddress}
                onChange={handleChange('address')}
                className='form__control' 
                placeholder='Contract end date' />
            </div>
                <div className="form__group">
                  <button onClick={this.continue} className='continue__btn'>Submit</button>
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

export default EmploymentDetails
