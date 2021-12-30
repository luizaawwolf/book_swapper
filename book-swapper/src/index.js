import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import {initializeApp} from "firebase/app";

// Use our config values
initializeApp({
  apiKey: "AIzaSyA4g0_PsIg69U6DnJKKH-5OHoKZVAJA5cI",
  authDomain: "book-swapper-cf45b.firebaseapp.com",
  projectId: "book-swapper-cf45b",
  storageBucket: "book-swapper-cf45b.appspot.com",
  messagingSenderId: "1015831939238",
  appId: "1:1015831939238:web:460558981cf275c3d64c67",
  measurementId: "G-5Y97CFZNKE"
});


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);