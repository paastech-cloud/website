import { extendTheme } from '@chakra-ui/react';

import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const themeExtensions = {
  colors: {
    brand: {
      bg: '#72969f',
      light_black: '#303642',
      purple: '#9C80FF',
      green: '#5e7140',
      red: '#FF6363',
      yellow: '#F2EFBF',
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
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
