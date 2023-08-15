import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
