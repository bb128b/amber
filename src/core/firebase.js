import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCsWZGwGZHAzc7RtQYRKUatVE4NtMxFMO8",
  authDomain: "amber-dcnet.firebaseapp.com",
  databaseURL: "https://amber-dcnet.firebaseio.com",
  projectId: "amber-dcnet",
  storageBucket: "amber-dcnet.appspot.com",
  messagingSenderId: "214047550254"
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
