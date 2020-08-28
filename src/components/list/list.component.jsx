import React from 'react';
import './list.styles.scss'


const List = () => (
    <div className="list">
        <h1>Expenses</h1>
        <div className="list-items">
            <div className="list-item">
                <div className="list-item__details">
                    <h2>Food</h2>
                    <span> : $1000</span>
                </div>
                <button className="list-item__delete">&#128502;</button>
            </div>
        </div>
    </div>
)   


export default List;