
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}


// getName()`
getName() {
    return this.name;
}
// * `getId()`
getID() {
    return this.id;
}
// * `getEmail()`
getEmail() {
    return this.email;
}
// * `getRole()`&mdash;returns `'Employee'`



module.exports = Employee;