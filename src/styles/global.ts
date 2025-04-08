import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    max-width: 90rem; 
    margin: 0 auto;  
    padding: 0 10rem; 
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
    overflow-x: hidden;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme['base-input']} inset ;
  }
`;
