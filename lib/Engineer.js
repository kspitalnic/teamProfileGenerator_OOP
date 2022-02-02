const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, phone, github){
        super(name, id, email, phone);
        Engineer.github = github; 
    }
    getPosition(){
        return "Engineer"
    }

    getGithub(){
        return Engineer.github;
    }
}

module.exports = Engineer 