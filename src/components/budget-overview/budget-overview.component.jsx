import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectTotalIncome, selectTotalExpense } from "../../redux/budget/budget.selectors";

import './budget-overview.styles.scss'


const BudgetOverview = ({ totalIncome, totalExpense }) => {
  
  const balance = totalIncome - totalExpense;

  return(
    <div className="budget-overview">
          <div className="budget-overview__field">
            <h1>Available Balance</h1>
            <span>: ${balance ? balance : 0}</span>
          </div>
          <div className="budget-overview__field">
            <h1>Income</h1>
            <span> : ${totalIncome ? totalIncome : 0}</span>
          </div>
          <div className="budget-overview__field">
            <h1>Expense</h1>
            <span> : ${totalExpense ? totalExpense : 0}</span>
          </div>
      </div>

)}


const mapStateToProps = createStructuredSelector(
  {
    totalIncome : selectTotalIncome,
    totalExpense : selectTotalExpense
  }
)


export default connect(mapStateToProps)(BudgetOverview);