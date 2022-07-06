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

  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  min-height: 100vh;
    /* ff 3.6+ */
    background: -moz-linear-gradient(
    179deg,
    rgba(31, 127, 149, 1) 29%,
    rgba(5, 115, 189, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    179deg,
    rgba(31, 127, 149, 1) 29%,
    rgba(5, 115, 189, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    179deg,
    rgba(31, 127, 149, 1) 29%,
    rgba(5, 115, 189, 1) 100%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0573BD', endColorstr='#1F7F95', GradientType=1 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    179deg,
    rgba(31, 127, 149, 1) 29%,
    rgba(5, 115, 189, 1) 100%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    179deg,
    rgba(31, 127, 149, 1) 29%,
    rgba(5, 115, 189, 1) 100%
  );
  
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

  section {
    margin: auto;
  }
`

export default GlobalStyles
