class Prescirption{
    constructor(doctorId, prescriptionId, medicines){
        this.doctorId = doctorId;
        this.prescriptionId= prescriptionId;
        this.medicines = medicines; // array of medicine names with their dosage in number of tablets and power in mg 
        this.date = new Date().toUTCString();
    }
    check(){
        if(this.doctorId == ""){
            return "Invalid Doctor Id";
        }else if(this.prescriptionId == ""){
            return "Invalid Prescription Id";
        }else if(this.medicines.length == 0){
            return "No medicine Entered yet";
        }
        return "success";
    }
    json(){
        return({
            "doctorId": this.doctorId,
            "prescirptionId": this.prescriptionId,
            "date": this.date,
            "medicines": this.medicines,
        });
    }
}

module.exports = Prescirption;