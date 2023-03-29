import React from 'react'
import Favorites from '@/components/Favorites'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import {useState, useEffect} from 'react'
import { getBooks } from "../utils/books"



const bookmarks = () => {
  const [books, setBooks] = useState([]);

  // setData("name");
  

  useEffect(() => {
    const func = async () => {
      let books = await getBooks();

      console.log("inside effect: ")
      console.log(books);
      setBooks(books);
    }
    func()
  },[])

  useEffect(() => {
    console.log("books was updated")
    console.log(books)
  },[books])

  // const booksArr = books.map(book => {
  //   <p>{book}</p>
  // })


  return (
    <>
      <h1>bookmarks</h1>
     {books.map(book => {
      return <p key={book.isbn10}>{book.title}</p>
     })}
    

    </>
    
  )
}

export default bookmarks