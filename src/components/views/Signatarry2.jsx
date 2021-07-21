import React from 'react'
import './Signatarry.css'

function Signatarry2() {
    return (
        <div>
            <div className='all__signature'>
            <section className="signatary__container">
                <h1 className='signature__h1'>Signatary</h1>
                <p className='signature__p'>If you have a signature please agree to continue</p>
                <div className="sign__group">
                    <input type="text" className='sign__control' placeholder='Names'/>
                </div>
                <div className="sign__group">
                    <input type="text" className='sign__control' placeholder='Email'/>
                </div>
                <div className="sign__group">
                    <input type="text" className='sign__control' placeholder='Phone'/>
                </div>
                <div className="sign__group">
                    <input type="text" className='sign__control' placeholder='Address'/>
                </div>
                <button className="sign__btn">
                    Add Another
                </button>
                <button className="sign__btn">
                    Confirm
                </button>
            </section>
        </div>
        </div>
    )
}

export default Signatarry2
