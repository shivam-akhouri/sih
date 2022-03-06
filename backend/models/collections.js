const { collection } = require("firebase/firestore");
const { db } = require("../firebaseconfig");

const user = collection(db, "user");
const doctor = collection(db, "doctor");
const retailer = collection(db, "retailer");
const supplier = collection(db, "supplier");
const prescription = collection(db, "prescription");
const box = collection(db, "box");
const checkpoint = collection(db, "checkpoint");
const contract = collection(db, "contract");
const medicine = collection(db, "medicine");
const prescription2 = collection(db, "prescription2");
const retailsales = collection(db, "retailsales");

module.exports = { user, doctor, retailer, supplier, prescription, box, checkpoint, contract, medicine, prescription2, retailsales };