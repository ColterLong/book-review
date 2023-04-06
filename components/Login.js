import React from 'react'
import styles from './Login.module.css'

const Searchbar = ( {signIn} ) => {

  function searchFunction() {

  }

  return (
    <div className={styles.container}>
        <button onClick={signIn}>Continue with Google</button>
    </div>
  )
}

export default Searchbar