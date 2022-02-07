import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />

  return (
    <div>
      <Head>
        <title>METAVERSE-LEARN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
