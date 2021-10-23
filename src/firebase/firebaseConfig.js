// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'; // importar elementos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAEDUxD5JFyBaI7Qde-oQCEuVXHYKPIvM",
  authDomain: "retosalida.firebaseapp.com",
  projectId: "retosalida",
  storageBucket: "retosalida.appspot.com",
  messagingSenderId: "1012115672569",
  appId: "1:1012115672569:web:9edd7e965a8f5fbfb4c128"
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