import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from '@/AppRouter';
import { customTheme } from '@/theme';

export const App = () => {
  const router = AppRouter();

  return (
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </React.StrictMode>
  );
};
