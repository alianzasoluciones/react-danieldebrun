
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCOYJZAX5srL0QJgdMVY_WQHhqkqSn5YBw",
  authDomain: "accesorios-p-coder.firebaseapp.com",
  projectId: "accesorios-p-coder",
  storageBucket: "accesorios-p-coder.appspot.com",
  messagingSenderId: "1040294516778",
  appId: "1:1040294516778:web:c01c512adbe9e30864cb53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)