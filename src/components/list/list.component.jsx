import React from 'react';
import './list.styles.scss'


const List = () => (
    <div className="list">
        <h1>Expenses</h1>
        <div className="list-items">
            <div className="list-item">
                <h2>Food</h2>
                <span> : $1000</span>
            </div >
            <div className="list-item">
                <h2>Clothing</h2> 
                <span> : $1000</span>
            </div>
            <div className="list-item"> 
                <h2>Shelter</h2>
                <span> : $1000</span>
            </div>
        </div>
    </div>
)   


export default List;