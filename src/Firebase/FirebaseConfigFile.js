import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyAlD6iTjnEasR6LVBE0Eti2uA445Hzxt-0",
 authDomain: "disneyplus-clone-76911.firebaseapp.com",
 projectId: "disneyplus-clone-76911",
 storageBucket: "disneyplus-clone-76911.appspot.com",
 messagingSenderId: "233338640281",
 appId: "1:233338640281:web:9cf140e6034e9eafd1a508",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const db = firebase.firestore()
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
