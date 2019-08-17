import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/*
Configuring firebase, firestore, and firebase auth
*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAHzG5hloNu_n8Rz-oDlhui5i0WdLFlqb0",
    authDomain: "busywork-33210.firebaseapp.com",
    databaseURL: "https://busywork-33210.firebaseio.com",
    projectId: "busywork-33210",
    storageBucket: "",
    messagingSenderId: "380774364218",
    appId: "1:380774364218:web:529297d7eb1d9eee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize firestore
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;