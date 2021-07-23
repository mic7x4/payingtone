import React from 'react'
import Footer from '../Footer'
import AfterNavSection from './AfterNavSection'
import GreenNav from './GreenNav'
import StarIcon from '@material-ui/icons/Star';
import Product from '../../assets/images/smartFridge.png'
import Next from '../../assets/images/next.svg'
import left from '../../assets/images/left.svg'
import  right from '../../assets/images/right.svg'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Fridge.css'

function Fridge() {
    const fridges =[Product,Product,Product];
    console.log(fridges);
    return (
        <div>
            <GreenNav/>
            <AfterNavSection heading='Buy Product' paragraph='See all product details here' />
            <section className="fride__section">
                <div className="container product__flex">
                    <div className="fridge__side">
                        <div className="product__image">
                            <img className='product__img' src={Product} alt="" />
                        </div>
                        <div className="carousel">
                            <div className="carousel__img">
                                <ArrowBackIcon className='carousel__btn'/>
                                 <div className="carousel__container">
                                     <img src={Product} alt="" />
                                 </div>
                                 <div className="carousel__container">
                                     <img src={Product} alt="" />
                                 </div>
                                 <div className="carousel__container">
                                     <img src={Product} alt="" />
                                 </div>
                                 <div className="carousel__container">
                                     <img src={Product} alt="" />
                                 </div>
                                 <div className="carousel__container">
                                     <img src={Product} alt="" />
                                 </div>
                                <ArrowForwardIcon className='carousel__btn'/>
                            </div>
                        </div>
                    </div>
                    <div className="fridge__details">
                        <h1>Samsung Fridge</h1>
                        <p className='product__model'>RFNOIR Model 0973-XN</p>
                        <div className="fridge__detail">
                            <p className='product__deep'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Temporibus inventore debitis facere ducimus voluptatibus 
                                fugit ipsa eligendi sed eveniet impedit.
                            </p>
                            <div className="color__number__total">
                                <div className="choose__colors">
                                    <h3>Colors</h3>
                                    <div className="colors">
                                    <div className="white__color">
                                        <div className="white"></div>
                                        <p className='color__indicator'>white</p>
                                    </div>
                                    <div className="black__color">
                                        <div className="black"></div>
                                        <p className='color__indicator'>Black</p>
                                    </div>
                                    <div className="gray__color">
                                        <div className="gray"></div>
                                        <p className='color__indicator'>gray</p>
                                    </div>
                                    <div className="next">
                                        <img src={Next} alt="" />
                                    </div>
                                    </div>
                                </div>
                                <div className="number">
                                    <h3>Numbers</h3>
                                    <div className="number__btns">
                                        <button>
                                            <img src={left} alt="" />
                                        </button>
                                            <span className='holder'>1</span>
                                        <button>
                                            <img src={right} alt="" />
                                        </button> 
                                    </div>
                                </div>
                                <div className="subtotal">
                                    <h3>Sub Toal</h3>
                                    <p className="subtot">
                                        34,000 Rwf
                                    </p>
                                </div>
                            </div>
                            <div className="seller__ratings">
                                <div className="sellerz">
                                    <h2 className='seller'>Seller</h2>
                                    <h3 className='company'>Florsa ltd</h3>
                                </div>
                                <div className="ratings">
                                    <h2 className='product__rate'>Rate this item</h2>
                                    <div className="all__ratings">
                                        <StarIcon className='rating__green'/>
                                        <StarIcon className='rating__green'/>
                                        <StarIcon className='rating__green'/>
                                        <StarIcon className='rating__green'/>
                                        <StarIcon className='rating__gray'/>

                                    </div>
                                </div>
                            </div>
                            <button 
                                className="product__cart__btn"
                            >   
                            <AddShoppingCartIcon className=''/>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Fridge
