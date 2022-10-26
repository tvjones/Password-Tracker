// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgxk5NT2V33tPaJUTgusjPkT--ML7C05I",
  authDomain: "password-manager-592f5.firebaseapp.com",
  projectId: "password-manager-592f5",
  storageBucket: "password-manager-592f5.appspot.com",
  messagingSenderId: "201051202029",
  appId: "1:201051202029:web:55e624f88bc8492b7fc7e4",
  databaseURL: "https://password-manager-592f5-default-rtdb.firebaseio.com/",
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);