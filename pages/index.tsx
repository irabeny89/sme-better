import type { NextPage } from 'next'
import Head from 'next/head'
import SignupForm from '../components/SignupForm'

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Head><title>Home</title></Head>
      </header>
      <main>
        <SignupForm />
      </main>
    </div>
  )
}

export default Home
