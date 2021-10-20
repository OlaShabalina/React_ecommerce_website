import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ijcn-At-ixvyOz3nhvs0N9OHvZerZBY",
  authDomain: "inco-e-commerce-db.firebaseapp.com",
  projectId: "inco-e-commerce-db",
  storageBucket: "inco-e-commerce-db.appspot.com",
  messagingSenderId: "359854080139",
  appId: "1:359854080139:web:30e331f354f45b7b42948e",
  measurementId: "G-JJBKPF99NZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Google authentification using Goggle auth library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Setting up Google sign-in (later on can add on other options)
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
