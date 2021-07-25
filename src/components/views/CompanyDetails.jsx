import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import AfterNavSection from './AfterNavSection'
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import GreenNav from './GreenNav';


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
        // const {values,handleChange} =  this.props;
        return (
         <>
          <GreenNav/>
            <AfterNavSection
                heading='Company Details'
                paragraph='Complete this form with required employment information'
            />
            <div className="signup__form">
              <div className="right__cta">
                <h4>Employment info</h4>
              </div>
        <form action="">
            <div className='form__group'>
                <input 
                type="text" name='cName' 
                className='form__control' 
                placeholder='Company name' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cAddress' 
                className='form__control' 
                placeholder='Company Address' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='ctinNumber' 
                className='form__control' 
                placeholder='Tin Number' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='yearofIncorporation' 
                className='form__control' 
                placeholder='Year of incorporation' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='nameofpointofcontract' 
                className='form__control' 
                placeholder='Name of point of contract' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='positionofpointofcontract' 
                className='form__control' 
                placeholder='Position of Point of contract' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cemail' 
                className='form__control' 
                placeholder='Email Address' />
            </div>
            <div className='form__group'>
                <span>
                    <LockIcon 
                    className='details'/>
                </span>
                <input
                    type='password'
                    name='cpassword'
                    className='form__control' 
                    placeholder='Enter Password' />
                    <VisibilityOffIcon
                     className="details passwd"
                    />
             </div>
            <div className='form__group'>
                <span>
                    <LockIcon 
                    className='details'/>
                </span>
                <input
                    type='password'
                    name='cpassword'
                    className='form__control' 
                    placeholder='Re-enter Password' />
                    <VisibilityOffIcon
                     className="details passwd"
                    />
             </div>
            <div className='form__group'>
              <span><AccountCircleIcon className='details'/></span>
              <input type="file"  
                name='profile' 
                className='form__control' 
                placeholder='Upload image' 
                />
              <PhotoLibraryIcon  className='details'/>
            </div>
            <div className="form__group">
                <button className='continue__btn'>
                    <Link to='/companyadmin' style={{color:'white'}} >Submit</Link>
                </button>
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
