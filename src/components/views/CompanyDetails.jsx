import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import GreenLogo from '../../assets/images/greenlogo.svg'


export class CompanyDetails extends Component {
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
                <h1>Company Details</h1>
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
                type="text" name='cName' 
                defaultValue={values.fullAddress}
                onChange={handleChange('cName')}
                className='form__control' 
                placeholder='Company name' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cAddress' 
                defaultValue={values.fullAddress}
                onChange={handleChange('cAddress')}
                className='form__control' 
                placeholder='Company Address' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='ctinNumber' 
                defaultValue={values.fullAddress}
                onChange={handleChange('ctinNumber')}
                className='form__control' 
                placeholder='Tin Number' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='yearofIncorporation' 
                defaultValue={values.fullAddress}
                onChange={handleChange('yearofIncorporation')}
                className='form__control' 
                placeholder='Year of incorporation' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='nameofpointofcontract' 
                defaultValue={values.fullAddress}
                onChange={handleChange('nameofpointofcontract')}
                className='form__control' 
                placeholder='Name of point of contract' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='positionofpointofcontract' 
                defaultValue={values.fullAddress}
                onChange={handleChange('positionofpointofcontract')}
                className='form__control' 
                placeholder='Position of Point of contract' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cemail' 
                defaultValue={values.fullAddress}
                onChange={handleChange('cemail')}
                className='form__control' 
                placeholder='Email Address' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='passord' 
                defaultValue={values.fullAddress}
                onChange={handleChange('password')}
                className='form__control' 
                placeholder='Create Password' />
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

export default CompanyDetails
