import firebase from 'firebase'

// get them in https://firebase.com

const firebaseConfig = {
    apiKey: "KEY",
  authDomain: "DOMAIN",
  projectId: "ID",
  storageBucket: "STORAGEBUCKET",
  messagingSenderId: "MSGID",
  appId: "APPID",
  measurementId: "MESID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db