class Medicine {
    constructor(
        medQR,
        manufacturerLicense,
        lastCheckpointLicense,
        reachedEndpoint,
        inStorage,
        presentContractID,
        presentBoxQR,
        units,
        batch,
        composition,
        expiry,
        prescriptionQR,
        category

    ) {
        this.medQR = medQR;
        this.manufacturerLicense = manufacturerLicense;
        this.lastCheckpointLicense = lastCheckpointLicense;
        this.reachedEndpoint = reachedEndpoint;
        this.inStorage = inStorage;
        this.presentContractID = presentContractID;
        this.presentBoxQR = presentBoxQR;
        this.units = units;
        this.batch = batch;
        this.composition = composition;
        this.expiry = new Date();
        this.prescriptionQR = prescriptionQR;
        this.category = category;

    }

    check() {
        if (this.medQR == "" || this.manufacturerLicense == "" || this.lastCheckpointLicense == ""
            || this.reachedEndpoint == "" || this.inStorage == "" || this.presentContractID == ""
            || this.presentBoxQR == "" || this.units == "" || this.batch == "" || this.composition == ""
            || this.expiry == "" || this.prescriptionQR == "" || this.category == "") {
            return "Invalid Entry";
        }
        return "success";
    }

    json() {
        return ({
            medQR: this.medQR,
            manufacturerLicense: this.manufacturerLicense,
            lastCheckpointLicense: this.lastCheckpointLicense,
            reachedEndpoint: this.reachedEndpoint,
            inStorage: this.inStorage,
            presentContractID: this.presentContractID,
            presentBoxQR: this.presentBoxQR,
            units: this.units,
            batch: this.batch,
            composition: this.composition,
            expiry: Number(this.expiry),
            prescriptionQR: this.prescriptionQR,
            category: this.category
        });
    }
}
module.exports = Medicine;