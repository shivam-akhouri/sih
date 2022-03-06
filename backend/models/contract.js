class Contract {
    constructor(
        contractID,
        fromLicense,
        toLicense,
        boxQRs,
        dateOfDdispatch,
        expectedDelivery,
        complete,
        dateOfArrival
    ) {
        this.contractID = contractID;
        this.fromLicense = fromLicense;
        this.toLicense = toLicense;
        this.boxQRs = boxQRs;
        this.dateOfDdispatch = new Date();
        this.expectedDelivery = new Date();
        this.complete = complete;
        this.dateOfArrival = new Date();
    }

    check() {
        if (this.contractID == "" || this.fromLicense == "" || this.toLicense == "" || this.boxQRs == ""
            || this.dateOfDdispatch == "" || this.expectedDelivery == "" || this.complete == "" || this.dateOfArrival == "") {
            return "Invalid Entry";
        }
        return "success";
    }

    json() {
        return ({
            contractID: this.contractID,
            fromLicense: this.fromLicense,
            toLicense: this.toLicense,
            boxQRs: this.boxQRs,
            dateOfDdispatch: Number(this.dateOfDdispatch),
            expectedDelivery: Number(this.expectedDelivery),
            complete: this.complete,
            dateOfArrival: Number(this.dateOfArrival)
        });
    }
}
module.exports = Contract;