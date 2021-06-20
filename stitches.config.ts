import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    mx: (config) => (value) => ({ marginLeft: value, marginRight: value }),
    my: (config) => (value) => ({ marginTop: value, marginBottom: value }),
  },
});