import React,{Component} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WcIcon from '@material-ui/icons/Wc';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Footer from '../Footer'
import GreenNav from './GreenNav';
import AfterNavSection from './AfterNavSection';


class UserAddress extends Component {
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
              <span><LocationOnIcon 
                className='details'/></span><input 
                type="text" name='address' 
                defaultValue={values.fullAddress}
                onChange={handleChange('address')}
                className='form__control' 
                placeholder='Enter your Address' />
            </div>
            <div className='form__group'>
              <span><AccountCircleIcon className='details'/></span>
              <input type="file"  
                name='profile' 
                className='form__control' 
                placeholder='Upload image' 
                defaultValue={values.image}
                onChange={handleChange('profile')}
                />
              <PhotoLibraryIcon  className='details'/>
            </div>
            <div className='form__group'>
              <span><WcIcon className='details'/></span>
              <select className="form__control" name='gender' defaultValue={values.gender}>
                <option value='none'>Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
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


export default UserAddress

