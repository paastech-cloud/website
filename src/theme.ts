import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/jua';

export const themeExtensions = {
  colors: {
    brand: {
      bg: '#344549',
      light_black: '#303642',
      purple: '#9C80FF',
      green: '#5e7140',
      red: '#FF6363',
      yellow: '#F2EFBF',
    },
  },
  fonts: {
    heading: "'Jua', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'brand.bg',
        color: 'white',
      },
    },
  },
};

export const customTheme = extendTheme(themeExtensions);
