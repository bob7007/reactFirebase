
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use

import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD4j56QxfvA_9hiovcvSsIhxiU6-DlNdPI",
    authDomain: "fb-crud-react-dfed4.firebaseapp.com",
    projectId: "fb-crud-react-dfed4",
    storageBucket: "fb-crud-react-dfed4.appspot.com",
    messagingSenderId: "624044504908",
    appId: "1:624044504908:web:e5aaff3983fa93bff381e9"
  };

  // Initialize Firebase
  
  //const analytics = getAnalytics(app);
  //firebase.initializeApp(firebaseConfig);
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
