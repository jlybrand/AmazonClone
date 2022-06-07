import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClAUzDwGXMN-NGJLzCvKq2s5qqgZqwXaY",
  authDomain: "clone-6b69e.firebaseapp.com",
  projectId: "clone-6b69e",
  storageBucket: "clone-6b69e.appspot.com",
  messagingSenderId: "299309809880",
  appId: "1:299309809880:web:5f7ec779f0f5a5a97217ad",
  measurementId: "G-DLDZWF5ZG5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
