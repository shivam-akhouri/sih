require("dotenv").config()
const express = require("express");
const { addDoc } = require("firebase/firestore");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth")
const path = require("path");
const pdf = require("pdf-creator-node");
const fs = require("fs");
const { user, doctor, retailer, supplier, prescription, box, checkpoint, contract, medicine, prescription2, retailsales } = require("../models/collections");
const User = require("../models/user");
const Doctor = require("../models/doctor");
const Prescription2 = require("../models/prescription2");
const Retailer = require("../models/retailer");
const Supplier = require("../models/supplier");
const analytics = require("./analytics");
// const bcrypt = require('bcrypt')

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

const Checkpoint = require("../models/checkpoint");
const Contract = require("../models/contract");
const Prescription = require("../models/prescription2");
const Retailsales = require("../models/retailsales");
const Medicine = require("../models/medicine");
const Box = require("../models/box");

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
    const body = req.body;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, body.username, body.password)
        .then(userCredentials => {
            console.log(userCredentials.user);
            res.status(201).json({
                "status": "success",
                "userId": userCredentials.user
            });
        })
        .catch(e => res.status(400).json({
            "status": "error",
            "errorcode": e.code,
            "errormessage": e.message
        }));
});

api.post("/signIn", (req, res) => {
    const body = req.body;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            console.log(userCredentials.user);
            res.status(201).json({
                "status": "success",
                "userId": userCredentials.user
            });
        })
        .catch(e => res.status(400).json({
            "status": "error",
            "errorcode": e.code,
            "errormessage": e.message
        }));
})

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
            .then(resp => {
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
                    .then(result => console.log(result))
                    .then(() => res.status(201).json({
                        status: "created",
                        result: resp.id,
                    }));
            });
    } else {
        res.status(409).json({
            status: "error",
            result: validation,
        });
    }
});

api.get("/createpdf", (req, res) => {
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
        .then(result => console.log(result))
        .then(res.send("done"))
});

// api.get("/sendMessage", (req, res) => {
//     client.messages.create({
//         from: 'whatsapp:+14155238886',
//         body: '*Next Gen Prescription Services*',
//         mediaUrl: ["http://www.africau.edu/images/default/sample.pdf"],
//         to: 'whatsapp:+919955582384'
//     })
//         .then(console.log)
//         .then(() => res.json({
//             "status": "success",
//             "message": "message send successfully"
//         }))
//         .catch(e => {
//             console.log(e);
//             res.json({
//                 "status": "error"
//             })
//         })
// });



api.post("/createPrescription2", (req, res) => {
    let body = req.body;
    // console.log(req.body);
    var new_prescription2 = new Prescription2(body.prescriptionQR, body.doctorReg, body.date,
        body.patientName, body.patientPhoneNo, body.prescribedMed, body.used, body.unlockCount);
    let validation = new_prescription2.check();
    if (validation == "success") {
        addDoc(prescription2, new_prescription2.json()).then(resp => {
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

api.post("/createRetailSales", (req, res) => {
    let body = req.body;
    var new_retailsales = new Retailsales(body.saleID, body.prescriptionQR, body.medSerials,
        body.medDosages, body.medQRs);
    let validation = new_retailsales.check();
    if (validation == "success") {
        addDoc(retailsales, new_retailsales.json()).then(resp => {
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

api.post("/createContract", (req, res) => {
    let body = req.body;
    var new_contract = new Contract(body.contractID, body.fromLicense, body.toLicense,
        body.boxQRs, body.dateOfDdispatch, body.expectedDelivery, body.complete, body.dateOfArrival);
    let validation = new_contract.check();
    if (validation == "success") {
        addDoc(contract, new_contract.json()).then(resp => {
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

api.post("/createCheckpoint", (req, res) => {
    let body = req.body;
    var new_checkpoint = new Checkpoint(body.medQR, body.checkpoints);
    let validation = new_checkpoint.check();
    if (validation == "success") {
        addDoc(checkpoint, new_checkpoint.json()).then(resp => {
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

api.post("/createMedicine", (req, res) => {
    let body = req.body;
    var new_medicine = new Medicine(body.medQR, body.manufacturerLicense, body.lastCheckpointLicense, body.reachedEndpoint, body.inStorage,
        body.presentContractID, body.presentBoxQR, body.units, body.batch,
        body.composition, body.expiry, body.prescriptionQR, body.category);
    let validation = new_medicine.check();
    if (validation == "success") {
        addDoc(medicine, new_medicine.json()).then(resp => {
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

api.post("/createBox", (req, res) => {
    let body = req.body;
    var new_box = new Box(body.boxQR, body.contractID, body.medQRs);
    let validation = new_box.check();
    if (validation == "success") {
        addDoc(box, new_box.json()).then(resp => {
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

module.exports = api;

