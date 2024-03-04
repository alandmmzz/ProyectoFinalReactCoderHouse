import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOwv-cbFrqUY_JAGgny8ocPGg0X6cK-Bk",
  authDomain: "pfmartinez-ebdd8.firebaseapp.com",
  projectId: "pfmartinez-ebdd8",
  storageBucket: "pfmartinez-ebdd8.appspot.com",
  messagingSenderId: "209509112100",
  appId: "1:209509112100:web:fbda9f6bb18e88c2903bb1",
  measurementId: "G-T1QKZZE75M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
