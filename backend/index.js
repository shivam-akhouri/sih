const express = require("express");
const { addDoc, collection } = require("firebase/firestore");
const api = require("./api");
const cors = require("cors");
const { db } = require("./firebaseconfig");
const { user } = require("./models/collections");

const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(cors());

app.use("/api", api);

app.get("/", (req, res) => {
    res.send("Smart India Hackathon");
})
app.listen(8000);