// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-5db9c.firebaseapp.com",
  projectId: "loop-5db9c",
  storageBucket: "loop-5db9c.firebasestorage.app",
  messagingSenderId: "635215016388",
  appId: "1:635215016388:web:fc3d7145b6ff8a69f4b491",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
