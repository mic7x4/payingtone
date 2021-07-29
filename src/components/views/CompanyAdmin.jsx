import React, { useState } from 'react'
import Footer from '../Footer';
import AfterNavSection from './AfterNavSection'
import GreenNav from './GreenNav'
import Signatarry from './Signatarry';

function CompanyAdmin() {
    const [show,setShow] = useState(false);

    const submit = (e)=>{
        e.preventDefault();
    }
    
    return (
        <>
          <GreenNav/>
            <AfterNavSection
                heading='Company Admin'
                paragraph='Complete this form with required company admin'
            />
            <div className="signup__form">
              <div className="right__cta">
                <h4>Company info</h4>
              </div>
            <form action="" onSubmit={submit}>
            <div className='form__group'>
                <input 
                type="text" name='ctinNumber' 
                className='form__control' 
                placeholder='Admin name' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='yearofIncorporation' 
                className='form__control' 
                placeholder='Admin position in a company' />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='nameofpointofcontract' 
                className='form__control' 
                placeholder="Admin's email" />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='positionofpointofcontract' 
                className='form__control' 
                placeholder="Admin's phone number" />
            </div>
            <div className='form__group'>
                <input 
                type="text" name='cemail' 
                className='form__control' 
                placeholder='Add office address' />
            </div>
            <div className="form__group">
                <button 
                    className='continue__btn'
                    onClick={()=> setShow(true)}
                    >
                    Submit
                </button>
            </div>
        </form>
            </div>
        <Signatarry show={show} onClose={()=> setShow(false)}/>
            <Footer/>
        </>
    )
}

export default CompanyAdmin
