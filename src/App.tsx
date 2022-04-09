import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';


import theme from './theme/theme';

import { Router } from './router/Router';
import { AccountUserPrivider } from './providers/AccountUserProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AccountUserPrivider>   
        <Router />
      </AccountUserPrivider>
    </ChakraProvider>
  );
}

export default App;
