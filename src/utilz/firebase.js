import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBC9thvNBFUPoFP0JcH_kk2icAFU744CQY",
    authDomain: "comichub-saif.firebaseapp.com",
    databaseURL: "https://comichub-saif.firebaseio.com",
    projectId: "comichub-saif",
    storageBucket: "comichub-saif.appspot.com",
    messagingSenderId: "166809223367",
    appId: "1:166809223367:web:af589813c25067eebb7ee2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;