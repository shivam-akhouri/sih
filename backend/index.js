const express = require("express");
const { addDoc, collection } = require("firebase/firestore");
const api = require("./api");
const cors = require("cors");
const { db } = require("./firebaseconfig");
const { user } = require("./models/collections");

const app = express();

app.use(cors());

app.use("/api", api);

app.get("/", (req, res)=>{
    res.send("Smart India Hackathon");
})
app.listen(8000);