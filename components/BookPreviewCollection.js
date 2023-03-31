import React from 'react'
import BookPreviewCard from './BookPreviewCard'
import styles from './BookPreviewCollection.module.css'

import Link from 'next/link'

import {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'



// TODO remove before production
// read json from file because limited number of api calls
//const arrTrendingBooks = require('../hardcover-fiction.json').results.books;
//const arrTrendingBooks = require('../api.nytimes.com-svc-books-v3-lists-full--overview.json').results.lists[0].books;
//console.log(arrTrendingBooks);


const allBooks = require('../api.nytimes.com-svc-books-v3-lists-full--overview.json').results.lists;
//console.log(allBooks);

const BookPreviewCollection = () => {
  // TODO: uncomment this before production
  //
  // use api call instead of read local file
  //
  // let arrTrendingBooks = [];
  // const callTrendingBooks = async () => {
  //   try {
  //     ***** api call here
  //     const data = await res.json();
  //     console.log(data);
  //     arrTrendingBooks.push(data.results.books);
  //     console.log("array: ");
  //     console.log(arrTrendingBooks);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
 
  // {callTrendingBooks()};

  // const renderTrendingBooks = arrTrendingBooks.map((book, index) =>
  //   <div key={index}>{book}</div>  
  // );

  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user.uid)
      console.log("current user from collection: " + currentUser)
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
        />
      ))}
    </div>
  }


  function renderAllBooks(currentUser) {
    return <>
      {/* <Link href='book2'>Click to open book</Link> */}
      {allBooks.map(listName => (
        <div className={styles.bookSection}>
          <h2 className={styles.title}>{listName.list_name}</h2>
          {renderBooks(listName.books, currentUser)}
        </div>
      ))}
    </>
  }



  return (
    <div key='TrendingBooks'>
      {/* <h1 className={styles.title}>Trending</h1> */}
      {renderAllBooks(currentUser)}
    </div>
  )


}

export default BookPreviewCollection