import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "book-swapper-cf45b.firebaseapp.com",
    projectId: "book-swapper-cf45b",
    storageBucket: "book-swapper-cf45b.appspot.com",
    messagingSenderId: "1015831939238",
    appId: "1:1015831939238:web:460558981cf275c3d64c67",
    measurementId: "G-5Y97CFZNKE"
  });

export const auth = app.auth()
export default app