// import React from 'react';
// import Budget from './components/Budget.jsx'

// const App = () => {
//     return (
//         <div>
//           <h1>TESTING CATs</h1>
//           <Budget />
//         </div>
//     )
// };

// export default App;

import React, { useEffect } from 'react';
import HeaderContainer from './containers/header.jsx';
// import FooterContainer from './containers/footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage.jsx';
import SignUp from './pages/signupPage.jsx';
import LogIn from './pages/loginPage.jsx';
import User from './pages/userPage.jsx';
// import './stylesheets/styles.scss';
// import { loggingIn, setUser } from './reducers/reducer.js';
import { useDispatch } from 'react-redux';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function checkLoggedIN() {
  //     await fetch('/server/isLoggedIN')
  //       .then((res) => res.json())
  //       .then((res) => {
  //         dispatch(loggingIn(res.loggedIn));
  //         dispatch(setUser(res.id));
  //       });
  //   }
  //   checkLoggedIN();
  // });

  return(
    <div>
      <Router>
        <HeaderContainer />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
     
    </div>
  )
}

export default App;