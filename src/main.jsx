import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgQ1ABSd2oCFFzA8vd0xrhoUxxLZuABJg",
  authDomain: "limit-import.firebaseapp.com",
  projectId: "limit-import",
  storageBucket: "limit-import.appspot.com",
  messagingSenderId: "818977757851",
  appId: "1:818977757851:web:d0ebc3c5aa776aaa29843e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
