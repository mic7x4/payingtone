import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import AfterNavSection from './AfterNavSection';
import GreenNav from './GreenNav'


export class BankDetails extends Component {
    render() {
        return (

           <>
           <GreenNav/>
            <AfterNavSection
                heading='Bank Details'
                paragraph='Complete this form with required employment information'
            />
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
                  <Link to='/insurer'  className='continue__btn'>Submit</Link>
                </div>
                <div className="form__group"> 
                  <Link  className='continue__btn'>Add Bank</Link>
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
