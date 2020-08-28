import { BudgetActionTypes } from './budget.types';


export const AddTransaction = transaction => ({
    type : BudgetActionTypes.ADD_TRANSACTION,
    payload : transaction
})

export const SelectedMonth = month => ({
    type: BudgetActionTypes.SELECTED_MONTH,
    payload : month.split(" ")[1]
})