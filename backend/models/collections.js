const { collection } = require("firebase/firestore");
const { db } = require("../firebaseconfig");

const user = collection(db, "user");
const doctor = collection(db, "doctor");
const retailer = collection(db, "retailer");
const supplier = collection(db, "supplier");
const prescription = collection(db, "prescription");

module.exports = {user, doctor, retailer, supplier, prescription};