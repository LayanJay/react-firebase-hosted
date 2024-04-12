// Import the necessary SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Change this line

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIzDv3USNSCeyk8UsEPZKDLQaXSIQAE",
    authDomain: "draftables-signups.firebaseapp.com",
    databaseURL: "https://draftables-signups-default-rtdb.firebaseio.com",
    projectId: "draftables-signups",
    storageBucket: "draftables-signups.appspot.com",
    messagingSenderId: "906332943631",
    appId: "1:906332943631:web:c70006c464416f23c6ba7a",
    measurementId: "G-B7BYMP4NQM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db };