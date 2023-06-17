import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from '@/AppRouter';

export const App = () => {
  const router = AppRouter();

  return (
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </React.StrictMode>
  );
};
