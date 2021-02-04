import * as firebase from 'firebase';
import { exp } from 'react-native-reanimated';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDjbkYMC-bO7qMRgXZyqVpvVI6an7Xcuxc",
    authDomain: "library-c3923.firebaseapp.com",
    databaseURL: "https://library-c3923-default-rtdb.firebaseio.com",
    projectId: "library-c3923",
    storageBucket: "library-c3923.appspot.com",
    messagingSenderId: "307725765062",
    appId: "1:307725765062:web:0ca63c8a7e5ee9f0100ac7"
  };
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()