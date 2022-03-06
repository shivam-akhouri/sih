const Checkpoints = require("../models/checkpoint");
const Contract = require("../models/contract");
const Prescription = require("../models/prescription2");
const Retailsales = require("../models/retailsales");
const Medicine = require("../models/medicine");
const Box = require("../models/box");


api.post("/createPrescription", (req, res) => {
    let body = req.body;
    // console.log(req.body);
    var new_prescription = new Prescription(body.prescriptionQR, body.doctorReg, body.date,
        body.patientName, body.patientPhoneNo, body.prescribedMed, body.used, body.unlockCount);
    let validation = new_prescription.check();
    if (validation == "success") {
        addDoc(prescription, new_prescription.json()).then(resp => {
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

api.post("/createCheckpoints", (req, res) => {
    let body = req.body;
    var new_checkpoints = new Checkpoints(body.medQR, body.checkpoints);
    let validation = new_checkpoints.check();
    if (validation == "success") {
        addDoc(checkpoints, new_checkpoints.json()).then(resp => {
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