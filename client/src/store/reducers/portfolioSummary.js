// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    portfolioSummary: []
};

// ==============================|| SLICE - PORTFOLIO SUMMARY ||============================== //

const portfolioSummary = createSlice({
    name: 'portfolioSummary',
    initialState,
    reducers: {
        setPortfolioSummary: (state, action) => {
            return {
                ...state,
                portfolioSummary: action.payload.portfolioSummary
            };
        },
    }
});

export default portfolioSummary.reducer;

export const { setPortfolioSummary } = portfolioSummary.actions;
