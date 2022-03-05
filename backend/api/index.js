const express = require("express");
const { addDoc } = require("firebase/firestore");
const { doctor, retailer, supplier } = require("../models/collections");
const Doctor = require("../models/doctor");
const Retailer = require("../models/retailer");
const Supplier = require("../models/supplier");

let api = express.Router();

api.use(express.json());

api.get("/show", (req, res)=>{
    res.send("Welcome to api");
});

api.post("/createDoctor", (req, res)=>{
    let body = req.body;
    // console.log(req.body);
    var new_doctor = new Doctor(body.firstname, body.lastname, body.email, body.phone, body.license);
    const doc = new_doctor.json();
    console.log(doc);
    addDoc(doctor, doc).then(resp=>{
        res.status(201).json({
            status: "created",
            result: resp.id
        })
    })
    .catch(e=>res.status(409).json({
        status: "error",
        result: e,
    }));
    // res.send("done");
});


api.post("/createRetailer", (req, res)=>{
    let body = req.body;
    var new_retailer = new Retailer(body.firstname, body.lastname, body.email,
        body.companyname, body.companyaddr, body.postal, body.phone, body.license);
    addDoc(retailer, new_retailer.json()).then(resp=>{
        res.status(201).json({
            status: "created",
            result: resp.id
        })
    })
    .catch(e=>res.status(409).json({
        status: "error",
        result: e,
    }));
});

api.post("/createSupplier", (req, res)=>{
    let body = req.body;
    var new_supplier = new Supplier(body.firstname, body.lastname, body.email,
        body.companyname, body.companyaddr, body.postal, body.phone, body.license);
    addDoc(supplier, new_supplier.json())
    .then(resp=>{
        res.status(201).json({
            status: "created", 
            result: resp.id,
        });
    })
    .catch(e=>res.status(409).json({
        status: "error",
        result: e,
    }));
});

module.exports = api;

