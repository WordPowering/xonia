import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCJeWtqwpnflrmUrj1SFISJmbAw3f7kv1Y",
  authDomain: "xonia-99b22.firebaseapp.com",
  projectId: "xonia-99b22",
  storageBucket: "xonia-99b22.appspot.com",
  messagingSenderId: "504320306723",
  appId: "1:504320306723:web:a9ff6a72003c3b044c0b96",
  measurementId: "G-64WX6RDCF4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db