import firebase from "firebase";

require("firebase/firestore");

const config = {
  apiKey: "",
  authDomain: ",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
