// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "estate-ca68f.firebaseapp.com",
  projectId: "estate-ca68f",
  storageBucket: "estate-ca68f.appspot.com",
  messagingSenderId: "1058062109093",
  appId: "1:1058062109093:web:182427139a03ed81f6804c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
