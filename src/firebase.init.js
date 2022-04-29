// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA_FvfaLprM70vQBOX8SKLzgiOFtCGUlU",
  authDomain: "assignment-11-306c4.firebaseapp.com",
  projectId: "assignment-11-306c4",
  storageBucket: "assignment-11-306c4.appspot.com",
  messagingSenderId: "152113658317",
  appId: "1:152113658317:web:8c7bbb457c29ce07e42c84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
