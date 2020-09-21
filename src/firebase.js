// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
// var firebase = require('firebase/app');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGc2FD5BGdpafqWTrJY_CFhYnyq-jBGYM",
    authDomain: "instagram-clone-react-6b326.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-6b326.firebaseio.com",
    projectId: "instagram-clone-react-6b326",
    storageBucket: "instagram-clone-react-6b326.appspot.com",
    messagingSenderId: "1017141286850",
    appId: "1:1017141286850:web:bcec9a3d403ac8dcec285b",
    measurementId: "G-9SLJLWZ7WJ"
  });

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };