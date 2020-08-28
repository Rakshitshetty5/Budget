import { BudgetActionTypes }  from './budget.types';

const INITITAL_STATE = {
    selectedMonth : '',
    budget : []
}


const budgetReducer = ( state = INITITAL_STATE, action ) => {
    switch(action.type){

        case BudgetActionTypes.SELECTED_MONTH: {
            return{
                ...state,
                selectedMonth: action.payload 
            }
        }

        // case BudgetActionTypes.ADD_TRANSACTION:{
        //     return{
        //         ...state,
        //         budget : AddTransactionToBudget(state.budget, state.selectedYear, action.payload)
        //     }
        // }

        default: 
            return state
    }
}

export default budgetReducer;