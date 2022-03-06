class Retailsales {
    constructor(
        saleID,
        prescriptionQR,
        medSerials,
        medDosages,
        medQRs
    ) {
        this.saleID = saleID;
        this.prescriptionQR = prescriptionQR;
        this.medSerials = medSerials;
        this.medDosages = medDosages;
        this.medQRs = medQRs;
    }

    check() {
        if (this.saleID == "" || this.prescriptionQR == "" || this.medSerials == ""
            || this.medDosages == "" || this.medQRs == "") {
            return "Invalid Entry";
        }
        return "success";
    }

    json() {
        return ({
            saleID: this.saleID,
            prescriptionQR: this.prescriptionQR,
            medSerials: this.medSerials,
            medDosages: this.medDosages,
            medQRs: this.medQRs
        });
    }
}
module.exports = Retailsales;