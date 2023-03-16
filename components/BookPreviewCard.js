import React from 'react'
import styles from './BookPreviewCard.module.css'
import Image from 'next/image'

const BookPreviewCard = ( {title, author, bookImage} ) => {
  return (
    <div key={title} className={styles.card}>
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
    </div>
  )
}

export default BookPreviewCard