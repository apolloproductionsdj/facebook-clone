import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCYxPGEFDabnE2nZ_AwMee4iUPpC7MhPWU",
  authDomain: "facebook-clone-45d7c.firebaseapp.com",
  databaseURL: "https://facebook-clone-45d7c.firebaseio.com",
  projectId: "facebook-clone-45d7c",
  storageBucket: "facebook-clone-45d7c.appspot.com",
  messagingSenderId: "820040300705",
  appId: "1:820040300705:web:cc93118994af01736198e0",
  measurementId: "G-PRZG61ZWCJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;