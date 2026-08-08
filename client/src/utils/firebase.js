
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-9d9a2.firebaseapp.com",
  projectId: "interviewiq-9d9a2",
  storageBucket: "interviewiq-9d9a2.firebasestorage.app",
  messagingSenderId: "1052849739084",
  appId: "1:1052849739084:web:3e66bc305d83fa942e2be9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}