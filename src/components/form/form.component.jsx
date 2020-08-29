import React from 'react';

import { connect } from 'react-redux'

import { addTransaction } from '../../redux/budget/budget.actions' 

import './form.styles.scss';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            operator : 'inc',
            description : '',
            value : null

        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { addTransaction } = this.props;
        addTransaction(this.state);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value });
    }

    render(){
        return(
            <div className="add">
                <form className="add__container" onSubmit={this.handleSubmit}>
                    <select className="add__type" name = "operator" onChange={this.handleChange}>
                        <option value="inc" selected>+</option>
                        <option value="exp">-</option>
                    </select>
                    <input 
                        type="text"
                        name = "description" 
                        className="add__description" 
                        placeholder="Add description"
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="number"
                        name = "value"
                        className="add__value" 
                        placeholder="Value" 
                        onChange={this.handleChange}
                    />
                    <button className="add__btn" type="submit">&#10004;</button>
                </form>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => ({
    addTransaction : transaction => dispatch(addTransaction(transaction))
})



export default connect(null, mapDispatchToProps)(Form)