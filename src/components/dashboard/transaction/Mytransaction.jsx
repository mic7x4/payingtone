import React from 'react'
import './Mytransaction.css'
import ContentNav from '../contentNav/ContentNav'
import TransactionTable from '../TransactionTable'

function Mytransaction() {
    return (
        <div className='my__transaction'>
            <ContentNav 
                title='My Transaction' 
                content='Here are all your transactions youve done so far'
            />
            <div className="transaction__table">
                <TransactionTable/>
            </div>
        </div>
    )
}

export default Mytransaction
