import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nano Móvil</title>
        <meta name="description" content="El mejor servicio en la terreta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
