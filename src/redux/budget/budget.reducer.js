import { BudgetActionTypes }  from './budget.types';
import { getMonth, addTransactionToBudget, deleteTransaction } from './budget.utils'

const INITITAL_STATE = {
    selectedMonth : '',
    monthlyTransactions : []
}


const budgetReducer = ( state = INITITAL_STATE, action ) => {
    switch(action.type){

        case BudgetActionTypes.SELECTED_MONTH: {
            return{
                ...state,
                selectedMonth: getMonth(action.payload)
            }
        }

        case BudgetActionTypes.ADD_TRANSACTION:{
            return{
                ...state,
                monthlyTransactions : addTransactionToBudget(state.monthlyTransactions, state.selectedMonth, action.payload)
            }
        }

        case BudgetActionTypes.DELETE_TRANSACTION:{
            return{
                ...state,
                monthlyTransactions : deleteTransaction(state.monthlyTransactions, state.selectedMonth, action.payload)
            }
        } 

        default: 
            return state
    }
}

export default budgetReducer;