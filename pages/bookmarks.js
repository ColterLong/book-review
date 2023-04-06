import React from 'react'
import {useState, useEffect} from 'react'
import { getBooks, verifyUserInDatabase, pushToFavorites } from "../utils/books"
import BookPreviewFavoritesCollection from '../components/BookPreviewFavoritesCollection'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Sidebar from '@/components/Sidebar'

const bookmarks = () => {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const [test, setTest] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user.uid)
    } else {
      console.log("user not signed in")
    }
  })

  
  useEffect(() => {
    const func = async () => {
      let verifyUser = await verifyUserInDatabase(String(currentUser))
      let books = await getBooks(String(currentUser));
      setBooks(books);
    }
    func()
  },[currentUser])


  // useEffect(() => {
  //   console.log("books was updated")
  //   console.log(books)
  // },[books])

  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
      <h1>Bookmarks</h1>
      <BookPreviewFavoritesCollection user={currentUser} books={books} />
      </div>
    </div>
    
  )
}

export default bookmarks