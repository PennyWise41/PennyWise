import * as types from './actionTypes.js';

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});
//export const setUsername = (username) => ({
//   type: SET_USERNAME,
//   payload: username,
// });

// export const setPassword = (password) => ({
//   type: SET_PASSWORD,
//   payload: password,
// });

// export const setFirstname = (lastname) => ({
//   type: SET_LASTNAME,
//   payload: lastname,
// });

// export const setLastname = (firstname) => ({
//   type: SET_FIRSTNAME,
//   payload: firstname,
// });

// export const setPassword = (password) => ({
//   type: SET_PASSWORD,
//   payload: password,
// });
