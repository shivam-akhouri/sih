class Prescription {
    constructor(
        prescriptionQR,
        doctorReg,
        date,
        patientName,
        patientPhoneNo,
        prescribedMed,
        used,
        unlockCount
    ) {
        this.prescriptionQR = prescriptionQR;
        this.doctorReg = doctorReg;
        this.date = date;
        this.patientName = patientName;
        this.patientPhoneNo = patientPhoneNo;
        this.prescribedMed = prescribedMed;
        this.used = used;
        this.unlockCount = unlockCount;
    }

    check() {
        if (this.prescriptionQR == "" || this.doctorReg == "" || this.date == "" || this.patientName == ""
            || this.patientPhoneNo == "" || this.prescribedMed == "" || this.used == "" || this.unlockCount == "") {
            return "Incorrect Name";
        }
        return "success";
    }

    json() {
        return ({
            prescriptionQR: this.prescriptionQR,
            doctorReg: this.doctorReg,
            date: this.date,
            patientName: this.patientName,
            patientPhoneNo: this.patientPhoneNo,
            prescribedMed: this.prescribedMed,
            used: this.used,
            unlockCount: this.unlockCount
        });
    }
}
module.exports = Prescription;