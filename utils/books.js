import { getFirestore, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const getBooks = async () => {

  const arr = [];
  const db = getFirestore();
  console.log("get auth")
  const auth = getAuth();
const user = auth.currentUser;
  console.log(user);
 
  // const uid = auth.currentUser.uid;
  // console.log(getAuth());
 
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