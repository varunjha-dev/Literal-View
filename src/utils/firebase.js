// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByw7w7w9ocQozhZowEJH_nyONkFIymEuM",
  authDomain: "literal-view.firebaseapp.com",
  projectId: "literal-view",
  storageBucket: "literal-view.firebasestorage.app",
  messagingSenderId: "1090836938726",
  appId: "1:1090836938726:web:1afad57e58a34ed694a027",
  measurementId: "G-5EFVLNS09F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();