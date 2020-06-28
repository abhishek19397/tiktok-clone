import firebase from "firebase";

require("firebase/firestore");

const config = {
  apiKey: "AIzaSyAJHHWMoJ_D60TYACQ6gUQ0dzq2ksumpn8",
  authDomain: "clonetk-app.firebaseapp.com",
  databaseURL: "https://clonetk-app.firebaseio.com",
  projectId: "clonetk-app",
  storageBucket: "clonetk-app.appspot.com",
  messagingSenderId: "644029319101",
  appId: "1:644029319101:web:e0a0113a145041f6daf4d4",
  measurementId: "G-VS846T9V9R",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
