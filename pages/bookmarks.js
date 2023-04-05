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
      // console.log(currentUser)

      // let verifyUser = await verifyUserInDatabase(String(currentUser))
      // console.log(verifyUser)
      // let books = await getBooks(String(currentUser));
      // setBooks(books);

    } else {
      console.log("user not signed in")
    }
  })

  
  useEffect(() => {
    const func = async () => {
      // let books = await getBooks("elrtifLALpClRAWjvfeg");
      let verifyUser = await verifyUserInDatabase(String(currentUser))
      // console.log(verifyUser)
      let books = await getBooks(String(currentUser));
      setBooks(books);
    }
    func()
  },[currentUser])
  // also update when user adds/deletes a book


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