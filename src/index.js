import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);