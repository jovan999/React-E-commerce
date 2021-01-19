import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDv_MjDLSjvCuCmXIFFumdM6SNwBA7D0Q",
  authDomain: "crown-db-react-1cace.firebaseapp.com",
  projectId: "crown-db-react-1cace",
  storageBucket: "crown-db-react-1cace.appspot.com",
  messagingSenderId: "848792301973",
  appId: "1:848792301973:web:dbeb6c1c2471eb418c469c",
  measurementId: "G-9MQG5ZF2T8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;