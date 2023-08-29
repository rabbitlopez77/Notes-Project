// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6WsLLilznPIFgPLSv61EcpmjQGKFhoA",
  authDomain: "react-notes-9987e.firebaseapp.com",
  projectId: "react-notes-9987e",
  storageBucket: "react-notes-9987e.appspot.com",
  messagingSenderId: "881504360559",
  appId: "1:881504360559:web:6153f0cb582feff355559a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")