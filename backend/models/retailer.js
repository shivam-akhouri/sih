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

    check(){
        if(this.firstName == "" || this.lastName == ""){
            return "Incorrect Name";
        }else if(!this.email.includes("@") || !this.email.includes(".")){
            return "Invalid email type";
        }else if(this.postalCode < 100000 || this.postalCode > 999999){
            return "Invalid postal code";
        }else if(this.phoneNum.toString().length != 10){
            return "Invalid Number";
        }
        return "success";
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