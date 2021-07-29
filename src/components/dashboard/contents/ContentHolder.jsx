import { CircularProgress} from '@material-ui/core';
import { ArrowForward, Message, MoreVert } from '@material-ui/icons';
import React from 'react'
import Progressbar from '../Progressbar'
import phone1 from '../../../assets/images/phone1.jpg'
import './ContentHolder.css'

function ContentHolder() {
    return (
        <div className='content__holder'>
            <div className="whole">
        <div className="contents__left">
            <div className="left__left">
                <div className="memory__usage">
                    <h1>Memory Usage</h1>
                    <div className='memory'>
                        <p>Loan Allowed:</p><span>120,000Rwf</span></div>
                    <div className='memory'>
                        <p>Amount used:</p><span>120,000Rwf</span>
                    </div>
                    <div className="progress">
                        <Progressbar className='progressbar'/>
                    </div>
                </div>
                <div className="content__services">
                    <h1>Services</h1>
                    <h6>All services i have</h6>

                    <ul className='services__holder'>
                        <li className='service__list'>
                            <div className="services__cont">
                                <h2>Name</h2>
                                <p>Motor Insurance</p>
                            </div>
                            <CircularProgress/>
                        </li>
                        <li className='service__list'>
                            <div className="services__cont">
                                <h2>Name</h2>
                                <p>Motor Insurance</p>
                            </div>
                            <CircularProgress/>
                        </li>
                        <li className='service__list'>
                            <div className="services__cont">
                                <h2>Name</h2>
                                <p>Motor Insurance</p>
                            </div>
                           <CircularProgress/>
                        </li>
                    </ul>
                    <div className="view__detail">
                        <p>
                            View Details 
                        </p> 
                            <ArrowForward/>
                    </div>
                </div>
            </div>
            <div className="left__right">
                <div className="products__side">
                    <h1>Products</h1>
                    <h6>My products & services</h6>
                    <ul className='products__holder'>
                        <li className='product__cont'>
                            <div className="img">
                                <img src={phone1} alt="" />
                            </div>
                            <div className="text__cont">
                                <h2>Name</h2>
                                <p>Nikon</p>
                            </div>
                            <div className="version">
                                <h2>Version</h2>
                                <p>V0997uui</p>
                            </div>
                            <CircularProgress/>
                        </li>
                        <li className='product__cont'>
                            <div className="img">
                                <img src={phone1} alt="" />
                            </div>
                            <div className="text__cont">
                                <h2>Name</h2>
                                <p>Nikon</p>
                            </div>
                            <div className="version">
                                <h2>Version</h2>
                                <p>V0997uui</p>
                            </div>
                            <CircularProgress/>
                        </li>
                        <li className='product__cont'>
                            <div className="img">
                                <img src={phone1} alt="" />
                            </div>
                            <div className="text__cont">
                                <h2>Name</h2>
                                <p>Nikon</p>
                            </div>
                            <div className="version">
                                <h2>Version</h2>
                                <p>V0997uui</p>
                            </div>
                            <CircularProgress/>
                        </li>
                    </ul>
                    <div className="view__detail">
                        <p>
                            View Details 
                        </p> 
                            <ArrowForward/>
                    </div>
                </div>
            </div>
            </div>
            <div className="my__reports">
                <h1 className='reports'>My Reports</h1>
                <p className='report__paragraph'>Bank Transaction</p>
                <div className='reports__container'>    
                    <ul className="reports__holder">
                        <li className="reports__item">
                            <div className="day">
                                <h2>02</h2>
                                <p>Mon</p>
                            </div>  
                            <div className="month__payment">
                                <h4>Feb Payment</h4>
                                <p>Mon</p>
                            </div>  
                            <div className="amount">
                                <h2>100,000</h2>
                            </div> 
                            <div className="actions">
                                <MoreVert/>
                            </div>
                        </li>
                        <li className="reports__item">
                            <div className="day">
                                <h2>02</h2>
                                <p>Mon</p>
                            </div>  
                            <div className="month__payment">
                                <h4>Feb Payment</h4>
                                <p>Mon</p>
                            </div>  
                            <div className="amount">
                                <h2>100,000</h2>
                            </div> 
                            <div className="actions">
                                <MoreVert/>
                            </div>
                        </li>
                        <li className="reports__item">
                            <div className="day">
                                <h2>02</h2>
                                <p>Mon</p>
                            </div>  
                            <div className="month__payment">
                                <h4>Feb Payment</h4>
                                <p>Mon</p>
                            </div>  
                            <div className="amount">
                                <h2>100,000</h2>
                            </div> 
                            <div className="actions">
                                <MoreVert/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="content__right">
                <div className="recent__offer">
                    <h1>Recent 0ffers</h1>
                    <p className='insurances__right'>All insurance Offer</p>
                    <ul className='offer__holder'>
                        <li className='offer__item'>
                            <div className="number">
                                <h2>01</h2>
                                <span>Mon</span>
                            </div>
                            <div className="offer__paragraph">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Architecto culpa et labore aut eos laboriosam voluptatibus explicabo eaque iure error.
                                </p>
                            </div>
                        </li>
                        <li className='offer__item'>
                            <div className="offer__paragraph">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Architecto culpa et labore aut eos laboriosam voluptatibus explicabo eaque iure error.
                                </p>
                            </div>
                            <div className="number">
                                <h2>02</h2>
                                <span>Mon</span>
                            </div>
                        </li>
                        <li className='offer__item'>
                            <div className="number">
                                <h2>03</h2>
                                <span>Mon</span>
                            </div>
                            <div className="offer__paragraph">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Architecto culpa et labore aut eos laboriosam voluptatibus explicabo eaque iure error.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="message__holder">
                    <h1>My Messages</h1>
                    <p className='message_right'>Your messages</p>
                    <ul className="messages__holder">
                        <li className="message__item">
                            <div className="message__img">
                                <Message/>
                            </div>
                            <div className="messages_para">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Aperiam recusandae quis dicta deleniti autem inventore libero amet provident, accusantium placeat?
                            </p>
                            <button className='view__message'>View Messages </button >
                            </div>
                        </li>
                        <li className="message__item">
                            <div className="message__img">
                                <Message/>
                            </div>
                            <div className="messages_para">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Aperiam recusandae quis dicta deleniti autem inventore libero amet provident, accusantium placeat?
                            </p>
                            <button className='view__message'>View Messages </button >
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContentHolder
