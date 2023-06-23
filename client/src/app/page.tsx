'use client'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import InpitWithLabel from '~/components/molecules/inputWithLabel'
import { auth } from '~/config/firebase'

export default function Home() {
  const provider = new GoogleAuthProvider()

  const loginWihtGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.idToken
        console.log(token)
        console.log(credential)
        console.log(result)

        void fetch(`http://localhost/auth/sociaLogin?token=${result.user.uid ?? ''}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${result.user.uid ?? ''}}`
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <body className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Login</h1>
        <InpitWithLabel label='Email' id='Email' type='email' />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loginWihtGoogle}
        >
          Login with Google
        </button>
      </main>
    </body>
  )
}
