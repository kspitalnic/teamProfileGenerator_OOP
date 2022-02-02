const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        github = this.github       }


getGithub() {
    return this.github;
}
getRole() {
    return 'Intern';
}
}

module.exports = Engineer 