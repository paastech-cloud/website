import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from '@/AppRouter';
import { customTheme } from '@/theme';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {
  const router = AppRouter();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};
