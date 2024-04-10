// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIzDv3USNSCeyk8u8UsEPZKDLQaXSIQAE",
  authDomain: "draftables-signups.firebaseapp.com",
  projectId: "draftables-signups",
  storageBucket: "draftables-signups.appspot.com",
  messagingSenderId: "906332943631",
  appId: "1:906332943631:web:c70006c464416f23c6ba7a",
  measurementId: "G-B7BYMP4NQM"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);

export { app, db };