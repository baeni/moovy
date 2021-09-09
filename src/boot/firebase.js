import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIREBASE_API_KEY = process.env.VUE_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "moovy--auth.firebaseapp.com",
  projectId: "moovy--auth",
  storageBucket: "moovy--auth.appspot.com",
  messagingSenderId: "156772489604",
  appId: "1:156772489604:web:8966db289473210c6be5d1"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
