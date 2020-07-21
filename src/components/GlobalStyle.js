import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

// Fonts
import wendyFont from '../fonts/wendy.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Wendy';
    src: url(${wendyFont}) format('woff');
  }

  body {
    margin: 0;
  }

  html {
    /* Include padding and border in all elements' total width and height. */
    box-sizing: border-box;

    background-color: #00ff00;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
