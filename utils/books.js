import { getFirestore, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user signed in:")
    console.log(user);
    console.log("user uid:")
    console.log(user.uid)
  } else {
    console.log("user not signed in")
  }
})

const getBooks = async () => {

  const arr = [];
  const db = getFirestore();
 
  const q = query(collection(db, "users","elrtifLALpClRAWjvfeg", "favorites"));
  // const q = query(collection(db, "users", user, "favorites"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log("test query")
    console.log(doc.id, " => ", doc.data())
    arr.push(doc.data())
  })



  return arr;
}

export { getBooks };