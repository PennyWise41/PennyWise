import { createSlice } from '@reduxjs/toolkit';

let d = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

const initialState = {
  loggedIn: false,
  id: null,
  username: null,
  fname: '',
  lname: '',
  budget: null,
  remaining: null,
  expenses: [],
  month: month,
  year: year,
};

const reducer = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
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
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

// export const clientActions = clientSlice.actions;.=
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
  setMonth,
  setYear,
} = reducer.actions;

export default reducer.reducer;
