// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    transactions: []
};

// ==============================|| SLICE - MENU ||============================== //

const transactions = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.transactions = action.payload.transactions;
        },
    }
});

export default transactions.reducer;

export const { setTransactions } = transactions.actions;
