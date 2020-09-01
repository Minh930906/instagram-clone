import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEvrxWJIb16Hzvo-aYsEgp9rxjJ8whFCw",
  authDomain: "instagram-clone-59eb5.firebaseapp.com",
  databaseURL: "https://instagram-clone-59eb5.firebaseio.com",
  projectId: "instagram-clone-59eb5",
  storageBucket: "instagram-clone-59eb5.appspot.com",
  messagingSenderId: "978050424486",
  appId: "1:978050424486:web:87e571e54746834fafde67",
  measurementId: "G-4G11XXZHRF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
