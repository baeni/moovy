import { doc, setDoc, getDoc } from "firebase/firestore";

// TODO: set current auth-user's email, ...
export async function addToUsersList(context) {
  const doc = doc(this.$firebase.firestore(), 'users', 'baeni.saa@gmail.com');

  await setDoc(doc, { list: [5, 6] }, { capital: true }, { merge: true });
}

// TODO: set current auth-user's email, ...
export async function fetchUserList(context) {
  const doc = doc(this.$firebase.firestore(), "users", "baeni.saa@gmail.com");
  const docSnap = await getDoc(doc);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}
