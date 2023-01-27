
class Employee {
    constructor(manager, id, email) {
        this.manager = manager;
        this.id = id;
        this.email = email;
    }
}


// getName()`

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