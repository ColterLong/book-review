import React from 'react'
import styles from './Login.module.css'
import Image from 'next/image'

const Searchbar = ( {signIn} ) => {

  function searchFunction() {

  }

  return (
    <div className={styles.container}>
        <h1>Login</h1>
        <button onClick={signIn} className={styles.button}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width={32} height={32}/>
          <h1 className={styles.text}>Sign in with Google</h1>
        </button>
    </div>
  )
}

export default Searchbar