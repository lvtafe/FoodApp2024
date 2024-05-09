const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCWeorB320I5udCzkFIoRZqyMtBSyUtgOc",
  authDomain: "beansceneapp-cc6aa.firebaseapp.com",
  projectId: "beansceneapp-cc6aa",
  storageBucket: "beansceneapp-cc6aa.appspot.com",
  messagingSenderId: "482778110527",
  appId: "1:482778110527:web:9c9060572324a296baf68a"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
