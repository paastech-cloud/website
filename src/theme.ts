import { extendTheme } from '@chakra-ui/react';

export const themeExtensions = {
  colors: {
    brand: {
      black: '#1A202D',
      light_black: '#303642',
      purple: '#9C80FF',
      green: '#00B570',
      red: '#FF6363',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.black',
        color: 'white',
      },
    },
  },
};

export const customTheme = extendTheme(themeExtensions);
