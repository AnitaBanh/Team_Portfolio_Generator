const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern