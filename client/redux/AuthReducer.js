import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(state, action) {
      console.log('login dispatched', action);
      state.isLoggedIn = true;
      state.client = action.payload;
    },
  },
});

// export const authActions = authSlice.actions;
export const { login } = authSlice.actions;
export default authSlice.reducer;
