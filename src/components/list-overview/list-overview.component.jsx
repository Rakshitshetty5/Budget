import React from 'react';
import './list-overview.styles.scss'

import List from '../list/list.component'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectMonthlyBudget } from '../../redux/budget/budget.selectors'

const ListOverview = ( { list } ) => {
    let income;
    let expenses;
    if(list.length !== 0){
        income = Object.entries(list["inc"]);
        expenses = Object.entries(list["exp"]);
    }
   
    return(
    <div className="list-overview">
        <div className="income">
            <h1>Income</h1>
            {
            income ?
                <div className="list-items">
                    {
                        income.map(transaction => 
                            <List transaction= {transaction} key = {transaction[0]} />
                        )
                    }
                </div>
                :
                <div></div>
            }   
        </div>
        <div className="expenses">
            <h1>Expenses</h1>
            {
                expenses ?
                    <div className="list-items">
                        {
                            expenses.map(transaction => 
                                <List transaction= {transaction} key={transaction[0]}/>
                            )
                        }
                    </div>
                    :
                <div></div>
            }
        </div>
    </div>
) }  

const mapStateToProps = createStructuredSelector({
    list : selectMonthlyBudget
})


export default connect(mapStateToProps)(ListOverview);