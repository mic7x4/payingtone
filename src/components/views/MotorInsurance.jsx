import React from 'react'
import './MotorInsurance.css'
import Footer from '../Footer'
import TextField from '@material-ui/core/TextField';
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection';

function MotorInsurance() {

    return (
        <div className='hidden'>
            {/* Green Navbar */}
           <GreenNav/>
            <AfterNavSection
                heading='Motor Insurance'
                paragraph='Complete the form below with required information to continue'
            />
        <section className="insurance__details">
            <div className="container">
            <div className="details__background"></div>
                <div className="details__container">
                    <div className="left__side">
                        <h2>More Details</h2>
                        <form action="">
                            <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                </select>
                            </div>
                             <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                </select>
                            </div>
                             <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical brand</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                </select>
                            </div>
                             <div className='form__group white'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Vehicle Version'
                                />
                            </div>
                             <div className='form__group'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Year of manufacture'
                                />
                            </div>
                             <div className='form__group'>
                                 <input type="text" 
                                    className='ins__control white'
                                    placeholder='Vehicle plate number'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='ins__rightside1'>
                        <h2>Insurance Calculator</h2>
                        <div className="ins__rightside">
                        <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                    <option className='ins__options'>Vehical Type</option>
                                </select>
                            </div>
                             <div className='form__group'>
                                <select name="vehical" id="" className='ins__control'>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                    <option className='ins__options'>Vehical use</option>
                                </select>
                            </div>
                            
                             <div className='form__group'>
                                 <TextField
                                    label="Insurance Start date"
                                    className='ins__control white'                              
                                    type="date"
                                    defaultValue="2017-05-24"
                                    style={{color:'#fff'}}
                                 />
                            </div>
                             <div className='form__group'>
                                 <TextField

                                    label="Insurance end date"
                                    className='ins__control white'                              
                                    type="date"
                                    defaultValue="2017-05-24"
                                 />
                            </div>
                            <div className="insurance__btn">
                                <button className='calculate__btn'>Calculate</button>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="ins__flex">
                    <button className='insurance__next'>Next</button>
                </div>
            </div>
        </section>
        <section >
            <Footer/>
        </section>
        </div>
    )
}

export default MotorInsurance
