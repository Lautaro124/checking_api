import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "checking-ce4a3.firebaseapp.com",
  projectId: "checking-ce4a3",
  storageBucket: "checking-ce4a3.appspot.com",
  messagingSenderId: "397704138273",
  appId: "1:397704138273:web:6591159c175a865c96dd60",
  measurementId: "G-0SMK219S25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;