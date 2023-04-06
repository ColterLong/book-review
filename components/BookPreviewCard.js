import React from 'react'
import styles from './BookPreviewCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { pushToFavorites, removeFromFavorites } from '@/utils/books'

const BookPreviewCard = ( {user, title, author, bookImage, description, isbn10, isbn13, publisher, amazonLink, willAddBook} ) => {
  let image=bookImage
  {if (bookImage === null) {
    image="https://freesvg.org/img/mono-gnome-question.png"
  }}

  return (
    <div key={title} className={styles.card}>
      <Link href={{
            query: {title, author, bookImage, description, isbn10, isbn13, publisher, amazonLink},
            pathname: '/book',
            }} 
            className={styles.link} 
            target="_blank">
        <Image
          className={styles.image}
          alt={title}
          src={image}
          width={200}
          height={300}
        />
        <div className={styles.container}>
          <p className={styles.text}>{title}</p>
          <p className={styles.text}>by {author}</p>
        </div>
      </Link>

      {
        willAddBook 
        ? <button className={styles.button} onClick={() => pushToFavorites(String(user), title, bookImage, author, description, isbn10, isbn13, publisher)}>
        <svg className={styles.svg} width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" /></svg>
        </button>
        : <button className={styles.button} onClick={() => removeFromFavorites(String(user), isbn13)}>
        <svg className={styles.svgRemove} width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" /></svg>
        </button>
      }
    </div>
  )
}

export default BookPreviewCard