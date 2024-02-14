// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-wcms.firebaseapp.com",
  projectId: "mern-wcms",
  storageBucket: "mern-wcms.appspot.com",
  messagingSenderId: "875505259988",
  appId: "1:875505259988:web:376830164f96e5ddecf241"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);