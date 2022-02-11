import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
    apiKey: "AIzaSyBMVMpVHNwe0J62FDozQA_aoOa6E3ISspw",
    authDomain: "testreact-131d4.firebaseapp.com",
    projectId: "testreact-131d4",
    storageBucket: "testreact-131d4.appspot.com",
    messagingSenderId: "773534935502",
    appId: "1:773534935502:web:a230b87da59d65da1de39f",
    measurementId: "G-M459NJ8Q2S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
