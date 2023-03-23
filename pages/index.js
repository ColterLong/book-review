import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout'


export default function Home(props) {
  return (
    <div>
      {props.user ? (
        <>
          <span>Signed in as : {props.user.email}</span>
          <button onClick={props.signOut}>Sign Out</button>
          <Layout />
        </>
      ) : (
        <button onClick={props.signIn}>Sign In</button>
      )}
    </div>
  );
  // return (
  //   <>
  //     <Layout />

  //   </>
  // )
}
