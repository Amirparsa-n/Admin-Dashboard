import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ContextProvider } from './contexts/ContextProvide';


import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>  
  </React.StrictMode>,
  document.getElementById('root'),
);
