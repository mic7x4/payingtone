import React from 'react'
import './Confirmation.css'
import Confirm from '../../assets/images/confirm.svg'
import Decline from '../../assets/images/declined.svg'
import Footer from '../Footer'
import GreenNav from './GreenNav'
import AfterNavSection from './AfterNavSection'

function Confirmation() {
    return (
        <>
        <GreenNav/>
            <AfterNavSection
                heading='Confirm'
                paragraph='Please read carefully & confirm this transaction'
            />
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
