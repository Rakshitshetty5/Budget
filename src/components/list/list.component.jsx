import React from 'react';
import './list.styles.scss'

const List = ( { transaction } ) => {
    console.log(transaction)
    const description = transaction[0];
    const value = transaction[1];    
    return(
         <div className="list-item">
            <div className="list-item__details">
                <h2>{ description }</h2>
                <span> : ${value}</span>
            </div>
            <button className="list-item__delete">&#128502;</button>
        </div>
) }  

export default List;