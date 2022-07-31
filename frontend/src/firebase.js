import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4kw7ei1EjUcscfjGmrjbZ5Uiv2eFDUu4",
  authDomain: "querious-c69e2.firebaseapp.com",
  projectId: "querious-c69e2",
  storageBucket: "querious-c69e2.appspot.com",
  messagingSenderId: "121016229279",
  appId: "1:121016229279:web:8da6212bb7d483459831aa",
  measurementId: "G-E9DCBTEYXP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
