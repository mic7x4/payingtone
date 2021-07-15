import React,{useState} from 'react'
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function UserPassword() { 
  const [values,setValues] = useState({
    passsword:'',
    showPassword:false
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };
  
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
console.log(values)

    return (
        <form>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input type='password'
                  onChange={handleChange('password')}
                  name='passowrd'  id='createpasswd' 
                  className='form__control' placeholder='Create Password' 
              />
              <VisibilityOffIcon className='details passwd'
              />
            </div>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input  type='password' 
                onChange={handleChange('password')}
                name='cpassword'  id='cpassword' className='form__control' 
                placeholder='Re-enter Password' />
              <VisibilityOffIcon className="details passwd"/>
            </div>
            <div className='form__group'>
              <span><LockIcon className='details'/></span>
              <input type="text" name='otp' className='form__control' placeholder='Enter otp sent to your phone' />
            </div>
        </form>
    )
}

export default UserPassword
