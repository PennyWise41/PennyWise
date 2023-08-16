import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  isLoggedIn: false,
  budgetLeft: 0,
  totalSpent: 0,
  recentSpending: 0,
};

const clientSlice = createSlice({
  name: 'clientSlice',
  initialState,
  reducers: {
    updateBudget: (state, action) => {
      console.log('updateBudget action received:', action);
      state.budgetLeft += action.payload;
    },
  },
});

// export const clientActions = clientSlice.actions;.=
export const { updateBudget } = clientSlice.actions;
export default clientSlice.reducer;
