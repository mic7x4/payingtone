import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WcIcon from '@material-ui/icons/Wc';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function UserAddress() {
    return (
        <form action="">
            <div className='form__group'>
              <span><LocationOnIcon className='details'/></span><input type="text" name='fullname' className='form__control' placeholder='Enter your Address' />
            </div>
            <div className='form__group'>
              <span><AccountCircleIcon className='details'/></span>
              <input type="file"  name='profile' className='form__control' placeholder='Upload image' />
              <PhotoLibraryIcon  className='details'/>
            </div>
            <div className='form__group'>
              <span><WcIcon className='details'/></span>
              <select className="form__control">
                <option value='none'>Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
        </form>
    )
}

export default UserAddress
