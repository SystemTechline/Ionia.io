import { createGlobalStyle } from 'styled-components';

import BeaufortEot from './fonts/Beaufort.eot';
import BeaufortTtf from './fonts/Beaufort.ttf';
import BeaufortWoff from './fonts/Beaufort.woff';
import BeaufortWoff2 from './fonts/Beaufort.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Beaufort Bold';
    src: local('Beaufort'), local('Beaufort'),
    url(${BeaufortEot}) format('eot'),
    url(${BeaufortTtf}) format('ttf'),
    url(${BeaufortWoff}) format('woff'),
    url(${BeaufortWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0e141b;
  }
`;
