class Checkpoints {
    constructor(
        medQR,
        checkpoints
    ) {
        this.medQR = medQR;
        this.checkpoints = checkpoints;
    }

    check() {
        if (this.medQR == "" || this.checkpoints == "") {
            return "Invalid Entry";
        }
        return "success";
    }

    json() {
        return ({
            medQR: this.medQR,
            checkpoints: this.checkpoints
        });
    }
}
module.exports = Checkpoints;