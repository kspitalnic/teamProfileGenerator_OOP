const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, phone, github){
        super(name, id, email, phone);
        this.github = github; 
    }
    getPosition(){
        return "Engineer"
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer 