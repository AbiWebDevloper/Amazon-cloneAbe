// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWWKV_hTAGKQvRDo6O1yBOGyZ24FGmeXc",
  authDomain: "clone-467ac.firebaseapp.com",
  projectId: "clone-467ac",
  storageBucket: "clone-467ac.firebasestorage.app",
  messagingSenderId: "642095981525",
  appId: "1:642095981525:web:2f5bfb4ebdbc5be870135c",
  measurementId: "G-1VRCGBBKR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
