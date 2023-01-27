const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.role = "Engineer";
    }
    // In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

}


module.exports = Engineer