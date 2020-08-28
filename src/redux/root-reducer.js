import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import budgetReducer from './budget/budget.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['budget']
}


const rootReducer = combineReducers({
    budget : budgetReducer
});


export default persistReducer(persistConfig, rootReducer);