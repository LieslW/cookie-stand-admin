import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main></main>
      <Footer />
    </div>
  )
}
