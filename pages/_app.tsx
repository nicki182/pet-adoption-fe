import theme from '../theme'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:Title
  src: url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
}
@font-face {
  font-family:Text
  src: url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap');
}
  body {
    margin: 0;
    padding: 0;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
