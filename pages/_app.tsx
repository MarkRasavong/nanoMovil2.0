import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Layout from '../components/Layout'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  
  )
}

export default MyApp
