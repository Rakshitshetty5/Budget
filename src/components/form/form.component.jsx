import React from 'react';
import './form.styles.scss'


const Form = () => (
    <div className="add">
        <div className="add__container">
            <select className="add__type">
                <option value="inc" selected>+</option>
                <option value="exp">-</option>
            </select>
            <input type="text" className="add__description" placeholder="Add description" />
            <input type="number" className="add__value" placeholder="Value" />
            <button className="add__btn">+</button>
        </div>
    </div>
)


export default Form