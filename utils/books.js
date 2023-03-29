import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore'

const getBooks = async () => {
  const db = getFirestore();
  const docRef = doc(db, "trending", "mine");
  // const docRef = doc(db, "users", "elrtifLALpClRAWjvfeg");
  // const favorites = await getDoc(docRef);
  const arr = [];
  const q = query(collection(db, "users","elrtifLALpClRAWjvfeg", "favorites"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log("test query")
    console.log(doc.id, " => ", doc.data())
    arr.push(doc.data())
  })



  return arr;
}

export { getBooks };