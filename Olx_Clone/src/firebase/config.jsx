import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAaIpRjLuVfhlsatJSS4pxpTww4tPDaLMQ",
  authDomain: "fir-c767f.firebaseapp.com",
  projectId: "fir-c767f",
  storageBucket: "fir-c767f.appspot.com",
  messagingSenderId: "121291752136",
  appId: "1:121291752136:web:8405fa2bd6d9c2fe79dbfd",
  measurementId: "G-V24KKXQJJX"
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase);
export const db = getFirestore(Firebase)
