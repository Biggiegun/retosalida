// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'; // importar elementos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIaD_huPMeWAyLqmwOkRsgobS6RHBH5Rs",
  authDomain: "sprint3-d0a95.firebaseapp.com",
  projectId: "sprint3-d0a95",
  storageBucket: "sprint3-d0a95.appspot.com",
  messagingSenderId: "205458330127",
  appId: "1:205458330127:web:0653b4f0a406485bdec97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore() //relaciona con la cadena de colección para saber donde guardar la información

export{
    app,
    google,
    facebook, 
    db
}