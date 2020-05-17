import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// firebase config

const firebase=require('firebase');
require('firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyDIvZYFhA5sCSsU52jmLwNx4L2ukg8dPRU",
  authDomain: "evernote-clone-6abd8.firebaseapp.com",
  databaseURL: "https://evernote-clone-6abd8.firebaseio.com",
  projectId: "evernote-clone-6abd8",
  storageBucket: "evernote-clone-6abd8.appspot.com",
  messagingSenderId: "531267216494",
  appId: "1:531267216494:web:cad3361e5edc430c03b27f",
  measurementId: "G-PJR772GCHZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-conainer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
