import React from 'react'
import Favorites from '@/components/Favorites'
import {useState, useEffect} from 'react'
import { getBooks } from "../utils/books"
import BookPreviewFavoritesCollection from '../components/BookPreviewFavoritesCollection'


const bookmarks = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <>
      <h1>bookmarks</h1>
      <BookPreviewFavoritesCollection books={books} />
    </>
    
  )
}

export default bookmarks