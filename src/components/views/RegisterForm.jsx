import React from 'react'
import Register from './Register'
import './RegisterForm.css'
import {Link} from 'react-router-dom'
import MainLogo from '../../assets/images/mainlogo.svg'

function RegisterForm() {
    return (
        <div className='register'>
                <div className="left"></div>
                <div className="right">
                    <div className="register__logo">
                        <Link to='/'> 
                            <img src={MainLogo} alt="" />
                        </Link>
                    </div>    
                </div> 
                <div className="form__container">
                    <p className="signup__text">Sign up</p>
                    <Register/>
                </div>
        </div>
    )
}

export default RegisterForm
