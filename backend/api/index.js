const express = require("express");
const { addDoc } = require("firebase/firestore");
const path = require("path");
const pdf = require("pdf-creator-node");
const fs = require("fs");
const { user, doctor, retailer, supplier, prescription } = require("../models/collections");
const User = require("../models/user");
const Doctor = require("../models/doctor");
const Prescirption = require("../models/prescirption");
const Retailer = require("../models/retailer");
const Supplier = require("../models/supplier");
const analytics = require("./analytics");
const bcrypt = require('bcrypt')

let api = express.Router();

api.use(function (req, res, next) {

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

api.use(express.json());

api.get("/show", (req, res) => {
    res.send("Welcome to api");
});

api.use("/analytics", analytics);

api.post("/signUp", (req, res) => {
    let body = req.body;
    // console.log(req.body);
    var new_user = new User(body.name, body.email, body.password);
    let validation = new_user.check();
    bcrypt.hash(body.password, 10).then(hash => {
        var val_user = new User(body.name, body.email, hash);
        if (validation == "success") {
            addDoc(user, val_user.json()).then(resp => {
                res.status(201).json({
                    status: "created",
                    result: resp.id
                })
            })
                .catch(e => res.status(409).json({
                    status: "error",
                    result: e,
                }));
        } else {
            res.status(409).json({
                status: "error",
                result: validation,
            });
        }
    }).catch(console.log);

    // res.send("done");
});

// api.get("/signIn", (req, res) => {
//     let body = req.body;
//     // compare body.password and pwd in db
//     bcrypt.compare(req.body.password, user.password).then(valid => {
//         if (valid) {
//             res.send('Success')
//             // res.json(user);
//         } else {
//             res.send('Not Allowed')
//         }

//     }).catch(next);

// });



api.post("/createDoctor", (req, res) => {
    let body = req.body;
    // console.log(req.body);
    var new_doctor = new Doctor(body.firstname, body.lastname, body.email, body.phone, body.license);
    const doc = new_doctor.json();
    let validation = new_doctor.check();
    if (validation == "success") {
        addDoc(doctor, doc).then(resp => {
            res.status(201).json({
                status: "created",
                result: resp.id
            })
        })
            .catch(e => res.status(409).json({
                status: "error",
                result: e,
            }));
    } else {
        res.status(409).json({
            status: "error",
            result: validation,
        });
    }
    // res.send("done");
});


api.post("/createRetailer", (req, res) => {
    let body = req.body;
    var new_retailer = new Retailer(body.firstname, body.lastname, body.email,
        body.companyname, body.companyaddr, body.postal, body.phone, body.license);
    let validation = new_retailer.check();
    if (validation == "success") {
        addDoc(retailer, new_retailer.json()).then(resp => {
            res.status(201).json({
                status: "created",
                result: resp.id
            })
        })
            .catch(e => res.status(409).json({
                status: "error",
                result: e,
            }));
    } else {
        res.status(409).json({
            status: "error",
            result: validation,
        });
    }
});

api.post("/createSupplier", (req, res) => {
    let body = req.body;
    var new_supplier = new Supplier(body.firstname, body.lastname, body.email,
        body.companyname, body.companyaddr, body.postal, body.phone, body.license);
    let validation = new_supplier.check();
    if (validation == "success") {
        addDoc(supplier, new_supplier.json())
            .then(resp => {
                res.status(201).json({
                    status: "created",
                    result: resp.id,
                });
            })
            .catch(e => res.status(409).json({
                status: "error",
                result: e,
            }));
    } else {
        res.status(409).json({
            status: "error",
            result: validation,
        });
    }
});

api.post("/createPrescription", (req, res) => {
    let body = req.body;
    let new_prescription = new Prescirption(body.doctorId, body.prescriptionId, body.medicines);
    let validation = new_prescription.check();

    if (validation == "success") {
        addDoc(prescription, new_prescription.json())
        .then(resp=>{
            const html = fs.readFileSync(path.join(__dirname, "../", "utils", "prescription.html"), "utf-8");
            var options = {
                format: "A4",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "15mm",
                    contents: `<div style="text-align: center; color: red;">this is an automatically generated pdf.
                    Content of this prescription can be verified by scanning the QR Code.</div>`
                },
                footer: {
                    height: "10mm",
                    contents: {
                        first: 'Baba Seghal prescription services',
                        2: 'Second page', // Any page number is working. 1-based index
                        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                        last: 'Last Page'
                    }
                }
            };
            console.log(new_prescription.getMedicines())
            var document = {
                html: html,
                data: {
                    medicines: new_prescription.getMedicines(),
                },
                path: path.join(__dirname, "../", "buffer", "output.pdf"),
                type: "",
            };
            pdf.create(document, options)
            .then(result=>console.log(result))
            .then(()=>res.status(201).json({
                status: "created",
                result: resp.id,
            }));
        });
    }else{
        res.status(409).json({
            status: "error",
            result: validation,
        });
    }
});

api.get("/createpdf", (req, res)=>{
    const body = req.body;

    const html = fs.readFileSync(path.join(__dirname, "../", "utils", "prescription.html"), "utf-8");
    var options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "15mm",
            contents: `<div style="text-align: center; color: red;">this is an automatically generated pdf.
            Content of this prescription can be verified by scanning the QR Code.</div>`
        },
        footer: {
            height: "10mm",
            contents: {
                first: 'Baba Seghal prescription services',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };

    var users = [
        {
            name: "Shyam",
            age: "26",
        },
        {
            name: "Navjot",
            age: "26",
        },
        {
            name: "Vitthal",
            age: "26",
        },
    ];

    var document = {
        html: html,
        data: {
            users: users,
        },
        path: path.join(__dirname, "../", "buffer", "output.pdf"),
        type: "",
    };
    pdf.create(document, options)
    .then(result=>console.log(result))
    .then(res.send("done"))
});



module.exports = api;

