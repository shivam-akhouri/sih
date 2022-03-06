const express  =require("express");
const { getDoc, doc, query, where, getDocs, orderBy } = require("firebase/firestore");
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
    const q = query(prescription, where("doctorId", "==", req.params.doctorid), orderBy("date"));
    var doct;
    const result = [];
    getDocs(q)
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            result.push(doc.data())
        });
    })
    .then(()=>{
        const q = query(doctor, where("govLicense", "==", req.params.doctorid));
        getDocs(q)
        .then(snapshot=>{
            doct = snapshot.docs[0].data()
            console.log(doct);
        })
        .then(()=>res.status(200).json({
            "status": "success",
            "data": result,
            "doctorData": doct,
        }))
    })
    .catch(e=>{
        console.log(e)
        res.status(409).json({
        "status": "error",
    })});
});

analytics.get("/maxDoctorDispense", (req, res)=>{
    const q = query(prescription, orderBy("medicines", "desc"));
    const result = []
    getDocs(q)
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            result.push(doc.date());
        })
    })
    .then(()=>res.status(200).json({
        "status": "success",
        "data": result,
    }))
    .catch(e=>{
        console.log(e)
        res.status(409).json({
            "status": "error",
        });
    });
})

analytics.get("/")

module.exports = analytics;