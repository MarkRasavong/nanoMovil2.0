import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Layout from '../components/Layout'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Provider } from 'react-redux'
import {store} from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </ThemeProvider>
    </Fragment>
  
  )
}

export default MyApp
