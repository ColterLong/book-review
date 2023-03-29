import React from 'react'
import styles from './BookPreviewFavoritesCollection.module.css'
import BookPreviewCard from '../components/BookPreviewCard'

const BookPreviewFavoritesCollection = ( {books} ) => {
  return <div className={styles.collection}>
      {books.map(book => (
        <BookPreviewCard 
          title={book.title} 
          author={book.author} 
          bookImage={book.image}
          description={book.description}
          isbn10={book.isbn10}
          isbn13={book.isbn13}
          publisher={book.publisher}
          // amazonLink={book.buy_links[0].url}
        />
      ))}
    </div>
  
}

export default BookPreviewFavoritesCollection