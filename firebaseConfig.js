// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbWj_7NK4yZD_Q-jMFqXQTIcMPyG__lw",
  authDomain: "mmm-goals.firebaseapp.com",
  projectId: "mmm-goals",
  storageBucket: "mmm-goals.firebasestorage.app",
  messagingSenderId: "693422832967",
  appId: "1:693422832967:web:4b9a9825a6e608029ca062",
  measurementId: "G-65BQ3RVX4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);