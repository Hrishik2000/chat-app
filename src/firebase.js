import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCurDT8CUXJ5qnV7gMZ7SDa5MWldL4avK8",
  authDomain: "chat-app-f4892.firebaseapp.com",
  projectId: "chat-app-f4892",
  storageBucket: "chat-app-f4892.appspot.com",
  messagingSenderId: "956244944876",
  appId: "1:956244944876:web:510a5cb2f12e9b5787c2c9",
  measurementId: "G-RYDBQJ1SS3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
