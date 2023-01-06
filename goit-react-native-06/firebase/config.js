import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ldh61a_PTnMsImQghlCrhOqI6UwU8Ww",
  authDomain: "react-native-hw-06.firebaseapp.com",
  projectId: "react-native-hw-06",
  storageBucket: "react-native-hw-06.appspot.com",
  messagingSenderId: "1005794754660",
  appId: "1:1005794754660:web:3c66e898a74b485ee29f71",
  measurementId: "G-JR24XMEPE4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const storage = getStorage();
export const db = getFirestore(app);
