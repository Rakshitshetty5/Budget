import React from 'react';

import { connect } from 'react-redux'

import { deleteTransaction } from '../../redux/budget/budget.actions' 

import './list.styles.scss'



const List = ( { transaction, inc, deleteTransaction } ) => {
    const transaction_description = transaction[0];
    const value = transaction[1];
    return(
         <div className="list-item">
            <div className="list-item__details">
                <div className = "list-item__details-description">{ transaction_description } </div>
                <div className = {`${inc ? 'list-item__details-value-inc' : 'list-item__details-value-exp' }`}> : ${value} </div>
            </div>
            <button className="list-item__delete" onClick={() => deleteTransaction({transaction, inc})}>&#128502;</button>
        </div>
) }  

const mapDispatchToProps = dispatch => ({
    deleteTransaction : ( transactionObj ) => dispatch(deleteTransaction(transactionObj))
})




export default connect(null,mapDispatchToProps)(List);