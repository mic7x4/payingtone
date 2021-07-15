import React, { Component } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom'
import './Login.css'
import  MainLogo from '../../assets/images/mainlogo.svg'

export default class Login extends Component {
    componentDidMount(){
        document.title = 'PayingTom | Login'
    }
    state={
        password:'',
        showPassword:false
    }
    handleChange = props => events =>{
        this.setState({...this.state,[props]:events.target.value})
    }
    render() {
        console.log(this.state)
        
        return (
            <div className='login'>
                <div className="left"></div>
                <div className="right">
                    <div className="register__logo">
                        <Link to='/'> 
                            <img src={MainLogo} alt="" />
                        </Link>
                    </div>
                </div>  
                <div className="form">
                    <p className="leading">Sign In</p>
                    <form action="">
                        <div className='form__group'>
                        <span>
                            <PersonIcon 
                                className='details'/>
                        </span>
                                <input type="text" name='email'
                                className='form__control' 
                                placeholder='Email or Username' 
                            />
                        </div>
                        <div className='form__group'>
                            <span>
                                <LockIcon 
                                className='details'/>
                            </span>
                            <input  
                                type='password' 
                                onChange={this.handleChange('password')}
                                name='cpassword' 
                                className='form__control' 
                                placeholder='Re-enter Password' />
                            <VisibilityOffIcon 
                                className="details passwd"
                            />
                         </div>
                         <div className="cta__button">
                             <button className='signin'>Sign In</button>
                         </div>

                         <p className='account'>Don't have an account yet? <Link to='register'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}
