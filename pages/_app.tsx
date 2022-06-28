import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Layout from '../components/Layout'
import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  
  )
}

export default MyApp
