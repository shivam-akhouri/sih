class User {
    constructor(
        name,
        email,
        password
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    check() {
        if (this.name == "") {
            return "Invalid Name";
        } else if (!this.email.includes("@") || !this.email.includes(".")) {
            return "Invalid email type";
        } else if (this.password == "") {
            return "Invalid Password";
        }
        return "success";
    }

    json() {
        return ({
            name: this.name,
            email: this.email,
            password: this.password
        });
    }
}
module.exports = User;