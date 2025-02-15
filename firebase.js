// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twittercasulo.firebaseapp.com",
  projectId: "twittercasulo",
  storageBucket: "twittercasulo.appspot.com",
  messagingSenderId: "1086752179285",
  appId: "1:1086752179285:web:710dddff6dfedee8a800dc",
  measurementId: "G-7JBL2QP050"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
