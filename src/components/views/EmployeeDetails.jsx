import React,{Component} from 'react'
import Footer from '../Footer'
import GreenNav from './GreenNav';


export default class EmployeeDetails extends Component {
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
         <GreenNav/>
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
                type="text" name='ename' 
                defaultValue={values.fullAddress}
                onChange={handleChange('ename')}
                className='form__control' 
                placeholder='Employer name' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='eAddress' 
                defaultValue={values.fullAddress}
                onChange={handleChange('eAddress')}
                className='form__control' 
                placeholder='Employer name' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='tinNumber' 
                defaultValue={values.fullAddress}
                onChange={handleChange('tinNumber')}
                className='form__control' 
                placeholder='Employer tin number' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='pointOfcontract' 
                defaultValue={values.fullAddress}
                onChange={handleChange('pointOfcontact')}
                className='form__control' 
                placeholder='Employer point of contact' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='lenOfcontract' 
                defaultValue={values.fullAddress}
                onChange={handleChange('lenOfcontract')}
                className='form__control' 
                placeholder='Length of Contract' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='yearofs' 
                defaultValue={values.fullAddress}
                onChange={handleChange('yearofs')}
                className='form__control' 
                placeholder='Years of service' />
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
