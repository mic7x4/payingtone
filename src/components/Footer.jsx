import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import playstore from '../assets/images/playstore.svg'
import applestore from '../assets/images/appstore.svg'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FooterLogo from '../assets/images/footerlogo.png'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <footer>
                <div className='footer__flex'>
                    <div className="payingtone__logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className="footer__sec">
                        <h2>Navigate</h2>
                        <ul className='footer__link'>
                            <li><Link to='/' href="">Home</Link></li>
                            <li><Link href="">About Us</Link></li>
                            <li><Link href="">Contact Us</Link></li>
                            <li><Link href="">Manage</Link></li>
                        </ul>
                    </div>
                    <div className='footer__sec'>
                        <h2>Contact Us</h2>
                        <div className='footer__contact'>
                            <div className="contacts">
                                <PhoneIcon className='footer__phone'/>
                                <span>+25078939392 <br/> +25078234567</span>
                            </div>
                            <div className='contacts'>
                                <EmailIcon className="footer__email"/>
                                <span>info@insurance.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='footer__sec'>
                        <h2>Follow Us</h2>
                        <div className="social__media">
                            <span><FacebookIcon className='facebook'/></span>
                            <span><InstagramIcon className='instagram'/></span>
                            <span><TwitterIcon className='twitter'/></span>
                            <p>PayingTone</p>
                        </div>
                        <div className="download__app">
                            <h3>Download our App on</h3>
                            <div className="apps">
                                <Link className='playstore'>
                                    <img src={playstore} alt="" />
                                </Link>
                                <Link className='appstore'>
                                    <img src={applestore} alt="" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="copyright">
                        &copy; Insurance 2020. Powered by <span>HviewTech Group</span>
                    </div>
                </footer>
    )
}

export default Footer
