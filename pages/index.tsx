import type { NextPage } from 'next'
import Head from 'next/head'
import Highlight from '../components/Highlight'
import SignupForm from '../components/SignupForm'

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Head><title>Home</title></Head>
      </header>
      <main className='md:grid grid-cols-2'>
        <SignupForm />
        <Highlight />
      </main>
    </div>
  )
}

export default Home
