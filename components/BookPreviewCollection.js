import React from 'react'
import BookPreviewCard from './BookPreviewCard'
import styles from './BookPreviewCollection.module.css'
import {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const BookPreviewCollection = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const loadBooks = async () => {
      // let res = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=0hxHD6P8QgSc4Of8t7G1uPunUfeJGLnQ');
      let res = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key='+process.env.NEXT_PUBLIC_API_KEY_NYT);
      let booksJson = await res.json();
      let allBooks = booksJson.results.lists
      setBooks(allBooks)
      console.log("books state variable: ")
      console.log(books)
      console.log("called api")
    }
      loadBooks();
        
        // const allBooks = require('../api.nytimes.com-svc-books-v3-lists-full--overview.json').results.lists;
        // setBooks(allBooks)
        // console.log("read file")
  },[])
  
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user.uid)
    } else {
      console.log("user not signed in")
    }
  })

  function renderBooks(books, currentUser) {
    return <div className={styles.collection}>
      {books.map(book => (
        <BookPreviewCard 
          user={currentUser}
          title={book.title} 
          author={book.author} 
          bookImage={book.book_image}
          description={book.description}
          isbn10={book.primary_isbn10}
          isbn13={book.primary_isbn13}
          publisher={book.publisher}
          amazonLink={book.buy_links[0].url}
          willAddBook={true}
        />
      ))}
    </div>
  }

  function renderAllBooks(currentUser) {
    return <>
      {books.map(listName => (
        <div className={styles.bookSection}>
          <h2 className={styles.title}>{listName.list_name}</h2>
          {renderBooks(listName.books, currentUser)}
        </div>
      ))}
    </>
  }

  return (
    <div key='TrendingBooks'>
      {renderAllBooks(currentUser)}
    </div>
  )
}

export default BookPreviewCollection