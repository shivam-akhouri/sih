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