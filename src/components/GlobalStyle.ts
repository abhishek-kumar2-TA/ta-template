import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.global.genericFontFamily.split(',').join(',')};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
}

h1,h2,h3,h4,h5,h6 {
  color: ${({ theme }) => theme.colors.secondary.base};
  font-family: ${({ theme }) => theme.global.specificFontFamily.split(',').join(',')};
}
`;

export default GlobalStyle;