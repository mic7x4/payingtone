import React from 'react'
import {Link} from 'react-router-dom'
import MainLogo from '../assets/images/mainlogo.svg'

function Navbar() {
    return (
                <nav className="navbar clean">
                    <div className='navbar__logo'>
                        <Link to='/'> <img src={MainLogo} alt="" /> </Link>
                    </div>
                    <div className='navbar__link'>
                        <ul className='navbar__ul'>
                            <li className='navbar__item'>
                                <a  className='navbar__link'>Home</a>
                            </li>
                            <li className='navbar__item'>
                                <a  className='navbar__link'>Manage</a>
                            </li>
                            <li className='navbar__item'>
                                <a  className='navbar__link'>Buy</a>
                            </li>
                            <li className='navbar__item'>
                                <a  className='navbar__link'>About Us</a>
                            </li>
                            <li className='navbar__item'>
                                <a  className='navbar__link'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__signin">
                        <button className="sign__btn">
                            <Link to='/login'>Sign In</Link>
                        </button>
                    </div>
                </nav>
    )
}

export default Navbar
