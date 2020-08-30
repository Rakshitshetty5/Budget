import React from 'react';

import { connect } from 'react-redux'

import { deleteTransaction } from '../../redux/budget/budget.actions' 

import { FormatMoney } from '../money-format.utils'

import './list.styles.scss'



const List = ( { transaction, inc, deleteTransaction } ) => {
    const transaction_description = transaction[0];
    const value = transaction[1];
    return(
         <div className="list-item">
            <div className="list-item__details">
                <div className = "list-item__details-description">{ transaction_description.toUpperCase() } </div>
                <div className = {`${inc ? 'list-item__details-value-inc' : 'list-item__details-value-exp' }`}>  {inc ? "+ " : "- "}{FormatMoney(value)} </div>
            </div>
            <button className="list-item__delete" onClick={() => deleteTransaction({transaction, inc})}><i class="fa fa-times"></i></button>
        </div>
) }  

const mapDispatchToProps = dispatch => ({
    deleteTransaction : ( transactionObj ) => dispatch(deleteTransaction(transactionObj))
})




export default connect(null,mapDispatchToProps)(List);