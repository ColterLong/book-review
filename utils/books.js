import { getFirestore, addDoc, setDoc, doc, getDoc, getDocs, collection, query, deleteDoc } from 'firebase/firestore'

const pushToFavorites = async (user, title, image, author, description, isbn10, isbn13, publisher) => {
  console.log("inside favorites")
  console.log("user: " + user)
  
  const db = getFirestore();
  const q = doc(db, "users", user);
  const favoritesDoc = doc(db, "users", user, "favorites", isbn13);                        
  await setDoc(favoritesDoc, {merge: true,
  title: title, 
  image: image,
  author: author,
  description: description,
  isbn10: isbn10,
  isbn13: isbn13,
  publisher: publisher,
  })
}

const removeFromFavorites = async (user, isbn13) => {
  const db = getFirestore();
  const docToRemove = doc(db, "users", user, "favorites", isbn13);
  const docSnap = await getDoc(docToRemove)
  if (docSnap.exists()) {
    await deleteDoc(docToRemove);
  } else {
    console.log("file does not exist")
  }
}


const verifyUserInDatabase = async (user) => {
  const db = getFirestore();
  const q = doc(db, "users", user);
  const querySnapshot = await getDoc(q);

  if (querySnapshot.exists()) {
    console.log("user exists in database")
  } else if (user === "undefined") {
    console.log("user is undefined, should update in a minute")
  } else {
    console.log("user actually doesn't exist")
    console.log(querySnapshot.exists())
    console.log(user);
    await setDoc(q, {merge: true})
  }
}

const getBooks = async (user) => {
  const arr = [];
  const db = getFirestore();
  const q = query(collection(db, "users", user, "favorites"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
  })

  return arr;
}

export { getBooks, verifyUserInDatabase, pushToFavorites, removeFromFavorites };