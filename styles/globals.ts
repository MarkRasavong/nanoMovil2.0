import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Permanent Marker", cursive;
  };
  

  section {
    margin: auto;
    padding: 4em;
  }
`

export default GlobalStyles
