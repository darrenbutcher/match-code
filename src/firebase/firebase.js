import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDNwfiSEvsmKQmlDYhCwYBOyHn3ynd0z2U",
  authDomain: "wize-manger.firebaseapp.com",
  databaseURL: "https://wize-manger.firebaseio.com",
  projectId: "wize-manger",
  storageBucket: "wize-manger.appspot.com",
  messagingSenderId: "824474624504"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// Exports
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };
