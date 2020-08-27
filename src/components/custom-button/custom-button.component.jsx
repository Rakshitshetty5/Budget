import React from 'react'

import './custom-button.styles.scss'

const CustomButton = (props) => (
    <button className= {`custom-button 
            ${props.spendings ? "custom-button__middle" : ''}
            ${props.selector ? `custom-button__option-selector ${props.active ? "active" : ""}` : ''}
            `} {...props}>
        {props.children}
    </button>
)

export default CustomButton