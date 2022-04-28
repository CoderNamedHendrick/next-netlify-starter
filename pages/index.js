import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    <script src="//code.tidio.co/sddr9cnjk4ydmxtmzheha5kmaj7xhf2h.js" async></script>
      </Head>
    <a href="#" onclick="tidioChatApi.open()">Open chat!</a>
    </div>
  )
}
