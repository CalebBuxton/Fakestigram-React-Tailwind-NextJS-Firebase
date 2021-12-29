// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getstoorage, getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZ2ClIvLOlx2rLNcwcowDqSpqoFxXfwo",
  authDomain: "fakestigram.firebaseapp.com",
  projectId: "fakestigram",
  storageBucket: "fakestigram.appspot.com",
  messagingSenderId: "405617787316",
  appId: "1:405617787316:web:c8139584bf109d4db2b2e1"
};

// Initialize Firebase
const app =  !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}