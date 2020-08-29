import { createSelector } from 'reselect';

const selectBudget = state => state.budget;


const selectMonth = createSelector(
    [selectBudget],
    budget => budget.selectedMonth
)

export const selectMonthlyBudget = createSelector(
    [selectBudget],
    budget => budget.monthlyTransactions[budget.selectedMonth] ?  budget.monthlyTransactions[budget.selectedMonth] : []

)

