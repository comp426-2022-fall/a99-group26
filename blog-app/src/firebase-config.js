// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvMVIB_zi52kxbqYfWxFYrvL5XWf4Wlh8",
  authDomain: "blog-comp426.firebaseapp.com",
  projectId: "blog-comp426",
  storageBucket: "blog-comp426.appspot.com",
  messagingSenderId: "556085066420",
  appId: "1:556085066420:web:afc2597c6a6c1e42f275e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();