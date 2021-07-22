import React,{Component} from 'react'
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Footer from '../Footer';
import GreenNav from './GreenNav';
import AfterNavSection from './AfterNavSection';


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
        <GreenNav/>
            <AfterNavSection
                heading='Sign Up'
                paragraph='Complete the form below to sign up!'
            />
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
