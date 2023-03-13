import React from 'react'
import BookPreviewCard from './BookPreviewCard'

// TODO remove before production
// read json from file because limited number of api calls
const arrTrendingBooks = require('../hardcover-fiction.json').results.books;
// console.log(arrTrendingBooks);

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

  function renderTrendingBooks() {
    // const renderTrendingBooks = arrTrendingBooks.map((book, index) =>
    //   <div key={index}>{book}</div>  
    // );
    return <div>
      {arrTrendingBooks.map(book => (
        <BookPreviewCard 
          title={book.title} 
          author={book.author} 
        />
      ))}
    </div>
  }
  

  // for (book in arrTrendingBooks) {
  //   console.log("book: ")
  //   console.log(book);
  // }

  return (
    
    <div key='TrendingBooks'>
      BookPreviewCollection
      {/* <button onClick={callTrendingBooks}>callTrendingbooks</button> */}
      {renderTrendingBooks()}
      

    </div>
  )
}

export default BookPreviewCollection