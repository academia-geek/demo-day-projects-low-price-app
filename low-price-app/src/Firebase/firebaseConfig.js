// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRD5SNG9IhO53jOZMnALKuPvCGZ-_N5Ys",
  authDomain: "low-price-app-b0164.firebaseapp.com",
  projectId: "low-price-app-b0164",
  storageBucket: "low-price-app-b0164.appspot.com",
  messagingSenderId: "54020581102",
  appId: "1:54020581102:web:03a8c82ba68725884235ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const baseDato = getFirestore()

export {
  app,
  google,
  baseDato
}