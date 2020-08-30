import React from 'react';
import './list.styles.scss'

const List = ( { transaction, inc } ) => {
    console.log(transaction)
    const description = transaction[0];
    const value = transaction[1];    
    return(
         <div className="list-item">
            <div className="list-item__details">
                <div className = "list-item__details-description">{ description } </div>
                <div className = {`${inc ? 'list-item__details-value-inc' : 'list-item__details-value-exp' }`}> : ${value} </div>
            </div>
            {/* <button className="list-item__delete">&#128502;</button> */}
        </div>
) }  

export default List;