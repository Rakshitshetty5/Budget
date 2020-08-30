import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectTotalIncome, selectTotalExpense } from "../../redux/budget/budget.selectors";

import { FormatMoney } from '../money-format.utils'

import './budget-overview.styles.scss'


const BudgetOverview = ({ totalIncome, totalExpense }) => {
  
  const balance = totalIncome - totalExpense;

  return(
    <div className="budget-overview">
          <div className="budget-overview__fields">
            <div className="budget-overview__field-property">Available Balance</div>
            <span className="budget-overview__field-value"> {balance ? ((balance > totalExpense ? "+ " + FormatMoney(balance) : "- " + FormatMoney(balance))) : 0.00}</span>
          </div>
          <div className="budget-overview__fields field-income">
            <div className="budget-overview__field-property">Income</div>
            <span className="budget-overview__field-value">  + {totalIncome ? FormatMoney(totalIncome) : 0.00}</span>
          </div>
          <div className="budget-overview__fields field-expense">
            <div className="budget-overview__field-property">Expense</div>
            <span className="budget-overview__field-value">  - {totalExpense ? FormatMoney(totalExpense) : 0.00}</span>
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