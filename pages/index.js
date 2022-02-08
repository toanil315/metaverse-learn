import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login';
import Messages from '../components/Messages';

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />

  return (
    <div className='h-screen w-full bg-gradient-to-b from-slate-900 to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>METAVERSE-LEARN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Header />
        <Messages />
      </main>
    </div>
  )
}
