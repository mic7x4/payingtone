import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function UserDetails() {
    return (
        <form action="">
            <div className='form__group'>
              <span><PersonIcon className='details'/></span><input type="text" name='fullname' className='form__control' placeholder='Full Name' />
            </div>
            <div className='form__group'>
              <span><EmailIcon className='details'/></span><input type="email" name='email' className='form__control' placeholder='Email' />
            </div>
            <div className='form__group'>
              <span><PhoneAndroidIcon className='details'/></span><input type="text" name='phone' className='form__control' placeholder='Phone'/>
            </div>
        </form>
    )
}

export default UserDetails
