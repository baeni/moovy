import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import db from 'src/boot/firebase';

export async function subscribeUsersMyList(context) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await onSnapshot(docRef, doc => {
    context.commit('setUsersMyList', doc.data().myList);
  });
}

export async function addToUsersMyList(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);
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

export async function removeFromUsersMyList(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await updateDoc(docRef, {
    myList: context.getters.getUsersMyList.filter(el => el.id !== movie.id)
  });
}
