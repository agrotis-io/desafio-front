import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    display: flex;
    text-decoration: none;
  }

  @font-face {
    font-display: swap;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/400.woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/700.woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/900.woff2');
  }

  body {
    background: ${({ theme }) => theme.colors.background.body};
    color:${({ theme }) => theme.colors.text.w000};
    font-family: 'Lato', sans-serif;
  }
`
export default GlobalStyle
