// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    transactions: []
};

// ==============================|| SLICE - TRANSACTIONS ||============================== //

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            return {
                ...state,
                transactions: action.payload.transactions
            };
        },
    }
});

export default transactions.reducer;

export const { setTransactions } = transactions.actions;
