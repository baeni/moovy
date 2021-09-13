import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIREBASE_API_KEY = process.env.VUE_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "moovy-c992e.firebaseapp.com",
  projectId: "moovy-c992e",
  storageBucket: "moovy-c992e.appspot.com",
  messagingSenderId: "398535714146",
  appId: "1:398535714146:web:b7425f8eda0675f124f83b"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
