import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GHOST JOSEF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi Maya GRRR <3!!!" />
       
         <code>
    //test
    background(51);</code>
       
      </main>

      <Footer />
    </div>
  )
}
