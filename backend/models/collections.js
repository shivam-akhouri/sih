const { collection } = require("firebase/firestore");
const { db } = require("../firebaseconfig");

const user = collection(db, "user");

module.exports = {user};