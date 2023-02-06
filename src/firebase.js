// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvPGlSsJX6qnbWAY6wvvP7_DFRLfCJs3s",
  authDomain: "image-uploader-a812f.firebaseapp.com",
  projectId: "image-uploader-a812f",
  storageBucket: "image-uploader-a812f.appspot.com",
  messagingSenderId: "585105072059",
  appId: "1:585105072059:web:80795f4d58ca429ebfee9e",
  measurementId: "G-NLZVXR4TG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export default storage;