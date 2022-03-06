class Box {
    constructor(
        boxQR,
        contractID,
        medQRs
    ) {
        this.boxQR = boxQR;
        this.contractID = contractID;
        this.medQRs = medQRs;
    }

    check() {
        if (this.boxQR == "" || this.contractID == "" || this.medQRs == "") {
            return "Invalid Entry";
        }
        return "Success";
    }

    json() {
        return ({
            boxQR: this.boxQR,
            contractID: this.contractID,
            medQRs: this.medQRs
        });
    }
}
module.exports = Box;