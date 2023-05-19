// third-party
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

// project import
import menu from './menu';
import transactions from './transactions';
import portfolioSummary from './portfolioSummary';
import { persistReducer } from 'redux-persist';

// ==============================|| COMBINE REDUCERS ||============================== //

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['transactions', 'portfolioSummary']
};

const reducers = combineReducers({
    transactions: persistReducer(persistConfig, transactions),
    portfolioSummary: persistReducer(persistConfig, portfolioSummary),
    menu
});

export default reducers;
