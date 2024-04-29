// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOnLtbIVV0VaJxYTe0yeRgcMqr8Sk7nY",
  authDomain: "painted-palette-a10.firebaseapp.com",
  projectId: "painted-palette-a10",
  storageBucket: "painted-palette-a10.appspot.com",
  messagingSenderId: "1086627071479",
  appId: "1:1086627071479:web:ebbdd636478c761c99daf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;