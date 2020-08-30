import React from 'react';
import './list-overview.styles.scss'

import List from '../list/list.component'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { selectMonthlyBudgetIncome, selectMonthlyBudgetExpense } from '../../redux/budget/budget.selectors'

const ListOverview = ( { monthlyIncome, monthlyExpense } ) => {
    let income;
    let expenses;
    if(monthlyIncome){
        income = Object.entries(monthlyIncome);
    }
    if(monthlyExpense){
        expenses = Object.entries(monthlyExpense);
    }
   
    return(
    <div className="list-overview">
        <div className="income">
            <h1 className="income-header">Income</h1>
            {
            income ?
                <div className="list-items">
                    {
                        income.map(transaction => 
                            <List transaction= {transaction} inc = {"inc"} key = {transaction[0]} />
                        )
                    }
                </div>
                :
                <div></div>
            }   
        </div>
        <div className="expenses">
            <h1 className="expenses-header">Expenses</h1>
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
    monthlyIncome : selectMonthlyBudgetIncome,
    monthlyExpense : selectMonthlyBudgetExpense 
})


export default connect(mapStateToProps)(ListOverview);