import '@/styles/globals.css'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {useEffect, useState} from "react";
import { firebaseConfig } from '@/firebase.config'



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
