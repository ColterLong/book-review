import React from 'react'
import styles from './BookPreviewCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BookPreviewCard = ( {title, author, bookImage, description, isbn10, isbn13, publisher, amazonLink} ) => {
  return (
    <div key={title} className={styles.card}>
      {/* <Link href={title} className={styles.link} target="_blank"> */}
      <Link href={{
            query: {title, author, bookImage, description, isbn10, isbn13, publisher, amazonLink}, // the data
            pathname: '/book',
            }} 
            // as={`/${title}`}
            className={styles.link} 
            target="_blank">
        <Image
          className={styles.image}
          alt={title}
          src={bookImage}
          width={200}
          height={300}
        />
        <div className={styles.container}>
          <p className={styles.text}>{title}</p>
          <p className={styles.text}>by {author}</p>
        </div>
      </Link>
      {/* <Image
        className={styles.image}
        alt={title}
        src={bookImage}
        width={200}
        height={300}
      />
      <div className={styles.container}>
        <p className={styles.text}>{title}</p>
        <p className={styles.text}>by {author}</p>
      </div> */}
    </div>
  )
}

export default BookPreviewCard