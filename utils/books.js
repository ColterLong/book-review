import { getFirestore, addDoc, setDoc, doc, getDoc, getDocs, collection, query } from 'firebase/firestore'

const verifyUserInDatabase = async (user) => {
  const db = getFirestore();
  const q = doc(db, "users", user);
  const querySnapshot = await getDoc(q);

  if (querySnapshot.exists()) {
    console.log("user exists in database")
  } else if (user === "undefined") {
    console.log("user is undefined, should update in a minute")
    // setDoc(q, {merge: true});
  } else {
    console.log("user actually doesn't exist")
    console.log(querySnapshot.exists())
    console.log(user);
    // await setDoc(q, { favorites: "favorites" })
    await setDoc(q, {merge: true})

    // still adds another book to it. probably just add
    // await addDoc(collection(db, "users", user, "favorites"), {title: "first_book"})
    
  }
}

// const verifyUserInDatabase = async (user) => {
//   const db = getFirestore();
//   try {
//     await runTransaction(db, async (transaction) => {
//       const sfDoc = await transaction.get(sfDocRef);
//       if (!sfDoc.exists()) {
//         throw "Document does not exist!";
//       }
  
//       const newPopulation = sfDoc.data().population + 1;
//       transaction.update(sfDocRef, { population: newPopulation });
//     });
//     console.log("Transaction successfully committed!");
//   } catch (e) {
//     console.log("Transaction failed: ", e);
//   }
// }

const getBooks = async (user) => {
  const arr = [];
  const db = getFirestore();
  // const q = query(collection(db, "users","elrtifLALpClRAWjvfeg", "favorites"));
  const q = query(collection(db, "users", user, "favorites"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log("test query")
    // console.log(doc.id, " => ", doc.data())
    arr.push(doc.data())
  })

  return arr;
}

export { getBooks, verifyUserInDatabase };