import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/performance';
// Both messaging and analytics packages do not work with react-native -- DO NOT ADD THEM!

// The app's Firebase configuration
var config = {
  apiKey: "AIzaSyAyCUt0rjBpczEAomxdhqtyic4orstSsxo",
  authDomain: "senando-app.firebaseapp.com",
  databaseURL: "https://senando-app.firebaseio.com",
  projectId: "senando-app",
  storageBucket: "senando-app.appspot.com",
  messagingSenderId: "911184510953",
  appId: "1:911184510953:web:82a7daa32691834ff31578",
  measurementId: "G-3P0NRLD6JS"
};

// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
// export const performance = (isProduction() && !isDemo()) ? firebase.performance() : null;

export default firebase;