import firebase from 'firebase/app'


// Public key/config for Project: CantShower
const config = {
  apiKey: "AIzaSyDIZLJGBJ_f7Si5RkbNDpmUTFqlNuZreio",
  authDomain: "cant-shower.firebaseapp.com",
  databaseURL: "https://cant-shower-default-rtdb.firebaseio.com",
  projectId: "cant-shower",
  storageBucket: "cant-shower.appspot.com",
  messagingSenderId: "485579127937",
  appId: "1:485579127937:web:94d38a07b4ce78798ba180",
  measurementId: "G-RHZ9SEN5E7"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    console.log("Firebase Initiated");
    firebase.initializeApp(config);
  }
}
 
