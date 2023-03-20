// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {
     getFirestore,collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbLUvOT37PCVr8nxxcYwQ8SzMjIwOkGPY",
  authDomain: "recycle-money.firebaseapp.com",
  projectId: "recycle-money",
  storageBucket: "recycle-money.appspot.com",
  messagingSenderId: "101113940596",
  appId: "1:101113940596:web:3c09d7fb356aaf84a0df21",
  measurementId: "G-C7JW1PDJF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db}