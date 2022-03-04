// Import the functions you need from the SDKs you need
require("dotenv").config()
const {initializeApp} = require("firebase/app");
const {getFirestore} = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    authDomain: "smartindiahackathon-e0597.firebaseapp.com",
    apiKey: process.env.apiKey,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = {db};