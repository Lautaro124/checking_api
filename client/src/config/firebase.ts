import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDfmX52xqH8uBprKf2IOO-caZ6efu0yt_M",
  authDomain: "gestion-9cc7c.firebaseapp.com",
  projectId: "gestion-9cc7c",
  storageBucket: "gestion-9cc7c.appspot.com",
  messagingSenderId: "353838279993",
  appId: "1:353838279993:web:51beb1761f5b91310ecce8",
  measurementId: "G-ZCDN2CYKW2"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
