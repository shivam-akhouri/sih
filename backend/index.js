const express = require("express");
const { addDoc, collection } = require("firebase/firestore");
const { db } = require("./firebaseconfig");
const { user } = require("./models/collections");

const app = express();
app.get("/", (req, res)=>{
    addDoc(user, {name: "testvalue1", age: "test value2"}).then(resp=>res.send("added to db"))
})
app.listen(8000);