import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMOWA3tdX_bOJiB2w25lVaw3ouHXtTORY",
    authDomain: "vue-invoice-app-80454.firebaseapp.com",
    projectId: "vue-invoice-app-80454",
    storageBucket: "vue-invoice-app-80454.appspot.com",
    messagingSenderId: "597970867796",
    appId: "1:597970867796:web:9aeead66ba7dd96f5a3fc1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()