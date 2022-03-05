class Doctor {
    constructor(
        firstName,
        lastName,
        email,
        phoneNum,
        govLicense
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNum = phoneNum;
        this.govLicense = govLicense;
    }

    check() {
        if (this.firstName == "" || this.lastName == "") {
            return "Incorrect Name";
        } else if (!this.email.includes("@") || !this.email.includes(".")) {
            return "Invalid email type";
        } else if (this.phoneNum.toString().length != 10) {
            return "Invalid Number";
        } else if (this.govLicense.toString().length != 6) {
            return "Invalid License";
        }
        return "success";
    }

    json() {
        return ({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNum: this.phoneNum,
            govLicense: this.govLicense
        });
    }
}
module.exports = Doctor;