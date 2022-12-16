import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {router} from './router/index'
import { RouterProvider } from "react-router-dom";
import CartProvider from "./context/cartContext"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNljrFbAxzperrU6Q4cV6t8zN5gyanJIs",
  authDomain: "ecommers-react-cd266.firebaseapp.com",
  projectId: "ecommers-react-cd266",
  storageBucket: "ecommers-react-cd266.appspot.com",
  messagingSenderId: "449892692567",
  appId: "1:449892692567:web:805abf9ed508a7337be912"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
// Import the functions you need from the SDKs you need


root.render(
  <CartProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
