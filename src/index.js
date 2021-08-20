import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDYPpvnHWg8FBrXigXihMQJ_FIxGJcRYbU",
  authDomain: "girlshostel-ff7a8.firebaseapp.com",
  projectId: "girlshostel-ff7a8",
  storageBucket: "girlshostel-ff7a8.appspot.com",
  messagingSenderId: "175445709381",
  appId: "1:175445709381:web:7abd76eb8ea691ad97492c",
  measurementId: "G-Y25SC7W4XG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
