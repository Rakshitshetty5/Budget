import { createSelector } from 'reselect';

const selectBudget = state => state.budget;

export const selectMonthlyBudget = createSelector(
    [selectBudget],
    budget => budget.monthlyTransactions[budget.selectedMonth] ?  budget.monthlyTransactions[budget.selectedMonth] : []

)


export const selectTotalIncome = createSelector(
    [selectMonthlyBudget],
    budget => budget.TotalIncome

)

export const selectTotalExpense = createSelector(
    [selectMonthlyBudget],
    budget => budget.TotalExpense
)

