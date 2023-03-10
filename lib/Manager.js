const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNum = officeNum;
        // this.role = "Manager"
    }

    getOfficeNum() {
        return this.officeNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager