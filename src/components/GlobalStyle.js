import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

// Fonts
import wendyFont from '../fonts/wendy.ttf'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

  @font-face {
    font-family: 'Wendy';
    src: url(${wendyFont}) format('woff');
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
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
