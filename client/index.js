import React from 'react';
import { createRoot } from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import ReactDOM from 'react-dom';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// render(<Provider><App /></Provider>, document.getElementById('app'));

const root = document.getElementById('app');
ReactDOM.createRoot(root).render(
    <App />
);
