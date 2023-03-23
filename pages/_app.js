import '@/styles/globals.css'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {useEffect, useState} from "react";
import { firebaseConfig } from '@/firebase.config'

   // apiKey: process.env.apiKey,
    // authDomain: process.env.authDomain,
    // projectId: process.env.projectId,
    // storageBucket: process.env.storageBucket,
    // messagingSenderId: process.env.messagingSenderId,
    // appId: process.env.appId,
    // measurementId: process.env.measurementId

// const firebaseConfig = {
    // apiKey: "AIzaSyB7gyNJBEPo6Lrgtsk1RrVZh92kmP-F92I",
    // authDomain: "book-review-2ce94.firebaseapp.com",
    // projectId: "book-review-2ce94",
    // storageBucket: "book-review-2ce94.appspot.com",
    // messagingSenderId: "13444793035",
    // appId: "1:13444793035:web:e26395709501755735d14e",
    // measurementId: "G-6HE2YX61HM"
// };



  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const signIn = () => auth.signInWithPopup(provider);
  const signOut = () => auth.signOut();

export default function App({ Component, pageProps }) {

  

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);

  return <Component 
    {...pageProps}
    user={user}
    signIn={signIn}
    signOut={signOut} 
    />
}
