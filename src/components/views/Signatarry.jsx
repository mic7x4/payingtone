import React from 'react'
import './Signatarry.css'

function Signatarry() {
    return (
        <div className='all__signature'>
            <section className="signatary__container">
                <h1 className='signature__h1'>Signatary</h1>
                <p className='signature__p'>If you have a signature please agree to continue</p>
                <div className="conf__btn">
                    <button className='yes__btn'>Yes</button>
                    <button className='no__btn'>No</button>
                </div>
                <p className='yes__text'>If yes how many</p>
                <div className="sign__group">
                    <input type="text" className='sign__control' placeholder='enter their number'/>
                </div>
                <button className="sign__btn">
                    Continue
                </button>
            </section>
        </div>
    )
}

export default Signatarry
