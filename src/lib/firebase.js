import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZHytRbDFWEVU9oao5nek-zngLXKM69A",
  authDomain: "basunsash.firebaseapp.com",
  projectId: "basunsash",
  storageBucket: "basunsash.appspot.com",
  messagingSenderId: "238985496191",
  appId: "1:238985496191:web:f79304303da71ec032a14a",
  measurementId: "G-1ZDWY2C0MW",
};

// Initialize Firebase

// Vue.prototype.$firebase = firebase;

/* eslint-disable no-new */
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db나 auth 같이 사용
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
