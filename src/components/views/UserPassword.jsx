import React,{Component} from 'react'
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom'
import Footer from '../Footer';
import GreenLogo from '../../assets/images/greenlogo.svg'


class UserPassword extends Component {
   continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){
    const {handleChange} = this.props;
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
                <h1>Sign Up</h1>
                <p>Complete the form below to sign up!</p>
                </div>
            </section>
            <div className="signup__form">
              <div className="right__cta">
                <h2>Sign Up</h2>
              </div>
        <form>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input type='password'
                  onChange={handleChange('password')}
                  name='passowrd'  id='createpasswd' 
                  className='form__control' placeholder='Create Password' 
              />
              <VisibilityOffIcon className='details passwd'
              />
            </div>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input  type='password' 
                onChange={handleChange('password')}
                name='cpassword'  id='cpassword' className='form__control' 
                placeholder='Re-enter Password' />
              <VisibilityOffIcon className="details passwd"/>
            </div>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input type="text" name='otp' className='form__control' placeholder='Enter otp sent to your phone' />
            </div>
                <div className="form__group">
                  <button onClick={this.continue} className='continue__btn'>Continue</button>
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

export default UserPassword
