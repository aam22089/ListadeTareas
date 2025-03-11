// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbeQzZ10IrrMNzY0SFxMyGMPU5DqE7MQg",
  authDomain: "lista-649d2.firebaseapp.com",
  projectId: "lista-649d2",
  storageBucket: "lista-649d2.firebasestorage.app",
  messagingSenderId: "1028922006678",
  appId: "1:1028922006678:web:e50281685a08cf374576b7",
  measurementId: "G-00B6H7HPZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);