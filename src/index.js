import React from 'react';
import { BrowserRouter } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

// redux persister
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);