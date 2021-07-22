import React from 'react'
import Footer from '../Footer'
import AfterNavSection from './AfterNavSection'
import GreenNav from './GreenNav'

function Fridge() {
    return (
        <div>
            <GreenNav/>
            <AfterNavSection heading='Buy Product' paragraph='See all product details here' />
            <Footer/>
        </div>
    )
}

export default Fridge
