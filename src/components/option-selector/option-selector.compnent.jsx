import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import Spendings from '../spendings/spendings.component'
import Visualize from '../visualize/visualize.component'

import './option-selector.styles.scss'

class OptionSelector extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedToggle : true
        }
    }

    handleClick = () => {
        this.setState({selectedToggle : !this.state.selectedToggle})
    }

    render(){
        return(
            <div>
                <div className="option-selectors">
                <CustomButton selector = {"selector"} active = {this.state.selectedToggle === true ? "active" : ''} onClick = {this.handleClick}>Spendings</CustomButton>
                <CustomButton selector = {"selector"} active = {this.state.selectedToggle === false ? "active" : ''} onClick = {this.handleClick}>Visualize</CustomButton>
                </div>
                {
                    this.state.selectedToggle ?
                        <Spendings />
                    :
                        <Visualize />
                }
            </div>
        )
    }


}


export default OptionSelector