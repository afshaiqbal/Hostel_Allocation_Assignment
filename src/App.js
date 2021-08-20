
import './App.css';
// Import FirebaseAuth and firebase.
import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import firebase from 'firebase';
import SignInScreen from './components/signin';
import Booked from './components/booked';
import Chooseyh from './components/Chooseyh';
import Chooseah from './components/Chooseah';
import Floor from './components/Floor';
import Popup from './components/popup';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Booked/> */}
      {/* <Chooseyh/> */}
      {/* <Chooseah/> */}
      <SignInScreen/>
      {/* <Floor/> */}
      {/* <Popup/> */}
    </div>
    </BrowserRouter>
  );
}