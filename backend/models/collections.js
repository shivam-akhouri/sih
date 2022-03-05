const { collection } = require("firebase/firestore");
const { db } = require("../firebaseconfig");

const user = collection(db, "user");
const doctor = collection(db, "doctor");
const retailer = collection(db, "retailer");
const supplier = collection(db, "supplier");

module.exports = {user, doctor, retailer, supplier};