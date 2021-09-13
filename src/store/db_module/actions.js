import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import db from 'src/boot/firebase';

export async function subscribeUsersWatchlist(context) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await onSnapshot(docRef, doc => {
    context.commit('setUsersWatchlist', doc.data().watchlist);
  });
}

export async function addToUsersWatchlist(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      watchlist: arrayUnion(movie)
    });
  } else {
    await updateDoc(docRef, {
      watchlist: arrayUnion(movie)
    });
  }
}

export async function removeFromUsersWatchlist(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await updateDoc(docRef, {
    watchlist: context.getters.getUsersWatchlist.filter(el => el.id !== movie.id)
  });
}

export async function subscribeUsersFavorites(context) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await onSnapshot(docRef, doc => {
    context.commit('setUsersFavorites', doc.data().favorites);
  });
}

export async function addToUsersFavorites(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      favorites: arrayUnion(movie)
    });
  } else {
    await updateDoc(docRef, {
      favorites: arrayUnion(movie)
    });
  }
}

export async function removeFromUsersFavorites(context, movie) {
  const docRef = doc(db, 'users', context.rootGetters["AuthModule/getUser"].email);

  await updateDoc(docRef, {
    favorites: context.getters.getUsersFavorites.filter(el => el.id !== movie.id)
  });
}
