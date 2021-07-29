import React from 'react'
import './InsuranceClaim.css'
import ContentNav from '../contentNav/ContentNav'
import CustomerStepper from './CustomerStepper'

function InsuranceClaim() {
    return (
        <div className='insurance__claim'>
            <ContentNav 
                title='Claim' 
                content='Clarify your claim here!'
            />
            <div className='claim__stepper__holder'>
                <CustomerStepper/>
            </div>
        </div>
    )
}

export default InsuranceClaim
