import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

const prodConfig = {
  apiKey: "AIzaSyDfqpLjCdb9tCdbCIFEI90LkXeEfeBUzs4",
  authDomain: "dsc-nsec-blogs.firebaseapp.com",
  databaseURL: "https://dsc-nsec-blogs.firebaseio.com",
  projectId: "dsc-nsec-blogs",
  storageBucket: "dsc-nsec-blogs.appspot.com",
  messagingSenderId: "1066927664407",
};

const devConfig = {
  apiKey: "AIzaSyDfqpLjCdb9tCdbCIFEI90LkXeEfeBUzs4",
  authDomain: "dsc-nsec-blogs.firebaseapp.com",
  databaseURL: "https://dsc-nsec-blogs.firebaseio.com",
  projectId: "dsc-nsec-blogs",
  storageBucket: "dsc-nsec-blogs.appspot.com",
  messagingSenderId: "1066927664407",
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
