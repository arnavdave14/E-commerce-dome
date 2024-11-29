// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDfgVOqUszEFG873p6gu-NgXX3JCn5QbL0",
  authDomain: "e-commerce-abb43.firebaseapp.com",
  projectId: "e-commerce-abb43",
  storageBucket: "e-commerce-abb43.firebasestorage.app",
  messagingSenderId: "1097522789149",
  appId: "1:1097522789149:web:519db900593961036efff4",
  measurementId: "G-Q080BQ3X36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore instance
