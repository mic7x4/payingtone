import React,{Component} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Footer from '../Footer'
import './UserDetails.css'
import GreenNav from './GreenNav';
import AfterNavSection from './AfterNavSection';


class UserDetails extends Component {
   continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){
    const {values,handleChange} = this.props;

    console.log(values,handleChange)
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
            <form action="">
                <div className='form__group'>
                  <span><PersonIcon className='details'/></span>
                    <input type="text" 
                      name='fullname' 
                      className='form__control' 
                      placeholder='Full Name' 
                      defaultValue={values.fullName}
                      onChange={handleChange('fullname')}
                      />
                </div>
                <div className='form__group'>
                  <span><EmailIcon className='details'/></span>
                    <input 
                      type="email" 
                      name='email' 
                      className='form__control' 
                      placeholder='Email' />
                </div>
                <div className='form__group'>
                  <span><PhoneAndroidIcon className='details'/></span>
                    <input 
                      type="text" name='phone' 
                      className='form__control' 
                      placeholder='Phone'/>
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

export default UserDetails
