// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVrAX30vS-Un6uTsQRMTHJYdZVSskwnV4",
  authDomain: "coolflims.firebaseapp.com",
  projectId: "coolflims",
  storageBucket: "coolflims.appspot.com",
  messagingSenderId: "452778064507",
  appId: "1:452778064507:web:76f13b2fa2ce0b20fc00de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);