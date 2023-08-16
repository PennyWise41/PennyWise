import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  id: null,
  username: null,
  fname: null,
  lname: null,
  budget: null,
  remaining: null,
  expenses: [],

  // colorTheme: null,
}

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  // Below `reducers` field allow us to define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    tryingToLogIn: (state, action) => {
      state.triedToLogIn = action.payload;
    },
    loggingIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setID: (state, action) => {
      state.id = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setFname: (state, action) => {
      state.fname = action.payload;
    },
    setLname: (state, action) => {
      state.lname = action.payload;
    },
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setRemaining: (state, action) => {
      state.remaining = action.payload;
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  }
})

export const {
  tryingToLogIn,
  loggingIn,
  setID,
  setUserName,
  setFname,
  setLname,
  setBudget,
  setRemaining,
  setExpenses,
} = reducer.actions;

export default reducer.reducer;