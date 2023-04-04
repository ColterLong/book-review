import React from 'react'
import styles from './BookPreviewFavoritesCollection.module.css'
import BookPreviewCard from '../components/BookPreviewCard'

const BookPreviewFavoritesCollection = ( {user, books} ) => {
  // console.log("user: " + user)
  // console.log("books: " + books)
  return <div className={styles.collection}>
      {books.map(book => (
        <BookPreviewCard 
          user={user}
          title={book.title} 
          author={book.author} 
          bookImage={book.image}
          description={book.description}
          isbn10={book.isbn10}
          isbn13={book.isbn13}
          publisher={book.publisher}
          willAddBook={false}
          // amazonLink={book.buy_links[0].url}
        />
      ))}
    </div>
  
}

export default BookPreviewFavoritesCollection