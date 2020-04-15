import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';

import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer 
        position="bottom-right"
      />
    </>
  );
}

export default App;
