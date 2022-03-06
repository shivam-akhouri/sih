const express  =require("express");
const { getDoc, doc, query, where, getDocs } = require("firebase/firestore");
const { db } = require("../firebaseconfig");
const { doctor,user, prescription } = require("../models/collections");

const analytics = express.Router();

analytics.get("/", (req, res)=>res.send("analytics page"));

analytics.get("/getDoctors/:id", (req, res)=>{
    console.log(req.params.id)
    const q = query(doctor, where("govLicense", "==", Number(req.params.id)));
    getDocs(q)
    .then(snapshot=>{
        snapshot.forEach(doc=>console.log(doc.data()))
    })
    .then(()=>res.send("done"));
});

analytics.get("/getDoctorPrescriptions/:doctorid", (req, res)=>{
    const q = query(prescription, where("doctorId", "==", req.params.doctorid));
    const result = [];
    getDocs(q)
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            result.push(doc.data())
        });
    })
    .then(()=>res.status(200).json({
        "status": "success",
        "data": result,
    }))
    .catch(e=>{
        console.log(e)
        res.status(409).json({
        "status": "error",
    })})
})

module.exports = analytics;