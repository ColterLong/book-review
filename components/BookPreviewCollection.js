import React from 'react'
import BookPreviewCard from './BookPreviewCard'
import styles from './BookPreviewCollection.module.css'

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

  
  function renderBooks(books) {
    return <div className={styles.collection}>
      {books.map(book => (
        <BookPreviewCard 
          title={book.title} 
          author={book.author} 
          bookImage={book.book_image}
        />
      ))}
    </div>
  }

  function renderAllBooks() {
    return <div>
      {allBooks.map(listName => (
        <div>
          <p className={styles.title}>{listName.list_name}</p>
          {renderBooks(listName.books)}
        </div>
      ))}
    </div>
  }



  return (
    <div key='TrendingBooks'>
      <h1 className={styles.title}>Trending</h1>
      {renderAllBooks()}
    </div>
  )


}

export default BookPreviewCollection