import { createSelector } from 'reselect';

const selectBudget = state => state.budget;

export const selectMonthlyBudget = createSelector(
    [selectBudget],
    budget => budget.monthlyTransactions[budget.selectedMonth] ?  budget.monthlyTransactions[budget.selectedMonth] : []

)

export const selectMonthlyBudgetIncome = createSelector(
    [selectMonthlyBudget],
    monthlyBudget => monthlyBudget.inc
)

export const selectMonthlyBudgetExpense = createSelector(
    [selectMonthlyBudget],
    monthlyBudget => monthlyBudget.exp
)

export const selectTotalIncome = createSelector(
    [selectMonthlyBudget],
    budget => budget.TotalIncome

)

export const selectTotalExpense = createSelector(
    [selectMonthlyBudget],
    budget => budget.TotalExpense
)

