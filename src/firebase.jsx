import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkX--Jrg2xoEBIZzxABrJG0vTjwWFp3KM",
  authDomain: "netflix-clone-5b5f6.firebaseapp.com",
  projectId: "netflix-clone-5b5f6",
  storageBucket: "netflix-clone-5b5f6.appspot.com",
  messagingSenderId: "310413965126",
  appId: "1:310413965126:web:8e9a221c67faf2a2eed747"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

