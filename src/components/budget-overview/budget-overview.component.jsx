import React from 'react';
import './budget-overview.styles.scss'


const BudgetOverview = () => (
    <div className="budget-overview">
          <div className="budget-overview__field">
          <h1>Available Balance</h1>
            <span>: $7888888</span>
          </div>
          <div className="budget-overview__field">
            <h1>Income</h1>
            <span> : $7888888</span>
          </div>
          <div className="budget-overview__field">
            <h1>Expense</h1>
            <span> : $788</span>
          </div>
      </div>

)


export default BudgetOverview