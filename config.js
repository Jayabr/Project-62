//import { initializeApp } from 'firebase/app';
//import  firebase from "firebase";

//initialize your database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBL5X2y-C_uGKJpQ5WBkr6-aFMrW3qYOoM",
  authDomain: "project-60-81974.firebaseapp.com",
  databaseURL: "https://project-60-81974-default-rtdb.firebaseio.com",
  projectId: "project-60-81974",
  storageBucket: "project-60-81974.appspot.com",
  messagingSenderId: "789144059417",
  appId: "1:789144059417:web:c60c76a9c6c674bcb7b488",
  measurementId: "G-EWPQR0VNQW"
};
/*if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}*/
//const app = initializeApp(firebaseConfig);
//export default firebase.database()
 

firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export default firebase.database()