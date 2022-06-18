
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOYJZAX5srL0QJgdMVY_WQHhqkqSn5YBw",
  authDomain: "accesorios-p-coder.firebaseapp.com",
  databaseURL: "https://accesorios-p-coder-default-rtdb.firebaseio.com",
  projectId: "accesorios-p-coder",
  storageBucket: "accesorios-p-coder.appspot.com",
  messagingSenderId: "1040294516778",
  appId: "1:1040294516778:web:c01c512adbe9e30864cb53",
  measurementId: "G-WK7ZKVQJ2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




