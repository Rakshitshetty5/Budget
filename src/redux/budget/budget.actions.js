import { BudgetActionTypes } from './budget.types';


export const addTransaction = transaction => ({
    type : BudgetActionTypes.ADD_TRANSACTION,
    payload : transaction
})

export const selectedMonth = month => ({
    type: BudgetActionTypes.SELECTED_MONTH,
    payload : month
})