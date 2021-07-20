import React from 'react'
import './Otp.css'


function Otp() {
    return (
       <div className='otp'>
            <div className='otp__container'>
            <h1 className='otp__heading'>OTP CODE</h1>
            <p className='otp__p'>Fill here otp code sent to your phone!</p>

            <div className="otp__group">
                <input type="text" min='0' className="otp__control" />
            </div>
            <button className='confirm__btn'>Confirm</button>
        </div>
       </div>
    )
}

export default Otp
