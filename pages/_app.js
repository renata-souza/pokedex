import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="Pokedex" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
