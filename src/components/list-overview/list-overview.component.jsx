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
        {
        income ?
            <div className="income">
                <div className="income-header">Income</div>
                    <div className="list-items">
                        {
                            income.map(transaction => 
                                <List transaction= {transaction} inc = {"inc"} key = {transaction[0]} />
                            )
                        }
                </div>
            </div>
            :
            <div></div>
        }
        {
        expenses ?
            <div className="expenses">
                <div className="expenses-header">Expenses</div>
                        <div className="list-items">
                            {
                                expenses.map(transaction => 
                                    <List transaction= {transaction} key={transaction[0]}/>
                                )
                            }
                </div>
            </div>
            :
            <div></div>
        }
    </div>
) }  

const mapStateToProps = createStructuredSelector({
    monthlyIncome : selectMonthlyBudgetIncome,
    monthlyExpense : selectMonthlyBudgetExpense 
})


export default connect(mapStateToProps)(ListOverview);