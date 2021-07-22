import React,{Component} from 'react'
import Footer from '../Footer'
import AfterNavSection from './AfterNavSection';
import GreenNav from './GreenNav';


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
         <GreenNav/>
            <AfterNavSection
                heading='Employment Details'
                paragraph='Complete this form with required employment information'
            />
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
