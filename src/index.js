// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6N3-991XZ9r7iyIIqS8Pm-NO6WXJL8c8",
  authDomain: "currency-f6a47.firebaseapp.com",
  databaseURL: "https://currency-f6a47-default-rtdb.firebaseio.com",
  projectId: "currency-f6a47",
  storageBucket: "currency-f6a47.appspot.com",
  messagingSenderId: "801759188397",
  appId: "1:801759188397:web:5831941a306da011a23d24",
  measurementId: "G-V3F90GFWW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const reference = ref(db, "currency");
