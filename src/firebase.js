import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB22TtqL-hwF-bcvO9ZILS8a6Ah-dVy13A",
    authDomain: "connext-webapp.firebaseapp.com",
    databaseURL: "https://connext-webapp.firebaseio.com",
    projectId: "connext-webapp",
    storageBucket: "connext-webapp.appspot.com",
    messagingSenderId: "278392481693",
    appId: "1:278392481693:web:04327c62c26c4294fef174",
    measurementId: "G-J18EJ0L7ZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;