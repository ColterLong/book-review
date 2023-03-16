import React from 'react'
import styles from './BookPreviewCard.module.css'
import Image from 'next/image'

const BookPreviewCard = ( {title, author, bookImage} ) => {
  // return (
  //   <div>
  //     key={title}
  //     title: {title}
  //     author: {author}
  //   </div>
  // )
  
  return (
    <div key={title} className={styles.card}>
      <Image
        className={styles.image}
        alt={title}
        src={bookImage}
        width={200}
        height={300}
      />
      <p className={styles.text}>{title} by {author}</p>
    </div>
  )
}

export default BookPreviewCard