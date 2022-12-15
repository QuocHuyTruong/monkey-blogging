import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCen4i7VF9CAcMTm_EPJjcmiNf9m-n4SJE",
  authDomain: "monkey-blogging-18542.firebaseapp.com",
  projectId: "monkey-blogging-18542",
  storageBucket: "monkey-blogging-18542.appspot.com",
  messagingSenderId: "675933313797",
  appId: "1:675933313797:web:c123b7184f7de1bc77b56c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
