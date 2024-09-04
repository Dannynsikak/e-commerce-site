// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTUl7ykfAxh4aobJxb1A9IPO952Q5aJ88",
  authDomain: "e-commerce-site-f87a7.firebaseapp.com",
  projectId: "e-commerce-site-f87a7",
  storageBucket: "e-commerce-site-f87a7.appspot.com",
  messagingSenderId: "657922326362",
  appId: "1:657922326362:web:0b291f62937b45d6acfd63",
  measurementId: "G-K37WHFKV68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };
