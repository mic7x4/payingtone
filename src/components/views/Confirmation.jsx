import React from 'react'
import './Confirmation.css'
import {Link} from 'react-router-dom'
import GreenLogo from '../../assets/images/greenlogo.svg'
import Confirm from '../../assets/images/confirm.svg'
import Decline from '../../assets/images/declined.svg'
import Footer from '../Footer'

function Confirmation() {
    return (<>
          <div className="motorimsurance__bg">
                <div className="background__ins"></div>
                <div className="container ">
                <span className='nav__holder'>
                    <div className="container">
                   <nav className="motorInsurance clean">
                    <div className='navbar__logo'>
                        <Link to='/'> <img src={GreenLogo} alt="" /> </Link>
                    </div>
                    <div className='navbar__link'>
                        <ul className='navbar__ul'>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Home</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Manage</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Buy</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>About Us</Link>
                            </li>
                            <li className='navbar__item'>
                                <Link  className='navbar__link'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__signin">
                        <button className="sign__btn">
                            <Link to='/login'>Sign In</Link>
                        </button>
                    </div>
                </nav>
               </div>
                </span>
                </div>
            </div>
            <section>
                <div  className="text__ins">
                <h1>Confirm</h1>
                <p>Please read carefully & confirm this transaction</p>
                </div>
            </section>
            <section className="confirmation__container">
                <div className="container flex__confi">
                    <div className="confirmation__content">
                        <p className="confirmation__p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dignissimos esse quo natus atque nam ab assumenda consequuntur, 
                            officia, repellendus recusandae voluptatem cum corporis ipsum ut laborum nulla 
                            hic adipisci beatae, modi soluta ipsa fugiat similique a at! Corrupti, sint 
                            adipisci quis aliquid perferendis nesciunt facilis aliquam quas consequatur 
                            obcaecati odit provident fuga ducimus voluptates, architecto ipsa! 
                            Incidunt tempore explicabo cupiditate officia qui laudantium sapiente quae. 
                            Totam sequi distinctio cumque architecto, explicabo eum sit iste adipisci 
                            soluta et autem expedita? Assumenda possimus alias voluptas. Possimus ipsum,
                             quisquam eum corporis at quod odit ullam vero quo recusandae aspernatur, 
                        </p>
                        <div className="confirmation__btn">
                            <button className="confirm">
                                <span>
                                    <img className="conf__holder" src={Confirm} alt="" />
                                </span>
                                <p className='ml__4'>Confirm</p>
                            </button>
                            <button className="confirm">
                                <span>
                                    <img className="conf__holder" src={Decline} alt="" />
                                </span>
                                <p className='ml__4'>Decline</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}

export default Confirmation
