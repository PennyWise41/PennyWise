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
    login(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const clientActions = clientSlice.actions;
export default clientSlice.reducer;
