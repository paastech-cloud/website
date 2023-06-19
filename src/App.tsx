import React from 'react';
import { RouterProvider } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from '@/AppRouter';
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      black: "#1A202D",
      light_black: "#303642",
      purple: "#9C80FF",
      green: "#00B570",
      red: "#FF6363"
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.black",
        color: "white"
      }
    }
  }

})


export const App = () => {
  const router = AppRouter();

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </React.StrictMode>
  );
};
