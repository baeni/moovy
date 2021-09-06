import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export async function addToUsersList(context, movie) {
  const docRef = doc(getFirestore(), 'users', context.rootGetters["AuthModule/getUser"].email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      myList: arrayUnion(movie)
    });
  } else {
    await updateDoc(docRef, {
      myList: arrayUnion(movie)
    });
  }
}

export async function removeFromUsersList(context, movie) {
  const docRef = doc(getFirestore(), 'users', context.rootGetters["AuthModule/getUser"].email);

  await updateDoc(docRef, {
    myList: arrayRemove(movie)
  });
}

export async function getUsersList(context) {
  const docRef = doc(getFirestore(), 'users', context.rootGetters["AuthModule/getUser"].email);
  const docSnap = await getDoc(docRef);

  return await docSnap.data().myList;
}
