import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';


import theme from './theme/theme';

import { Router } from './router/Router';
import { AccountUserPrivider } from './providers/AccountUserProvider';
import { AccountDataPrivider } from './providers/AccountDataProvider';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <AccountUserPrivider>
        <AccountDataPrivider>
          <Router />
        </AccountDataPrivider> 
      </AccountUserPrivider>
    </ChakraProvider>
  );
}

export default App;
