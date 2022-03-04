class Retailer {
    constructor(
        firstName,
        lastName,
        email,
        companyName,
        companyAddr,
        postalCode,
        phoneNum,
        govLicense
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.companyName = companyName;
        this.companyAddr = companyAddr;
        this.postalCode = postalCode;
        this.phoneNum = phoneNum;
        this.govLicense = govLicense;
    }

    json() {
        return ({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            companyName: this.companyName,
            companyAddr: this.companyAddr,
            postalCode: this.postalCode,
            phoneNum: this.phoneNum,
            govLicense: this.govLicense
        });
    }
}
module.exports = Retailer;