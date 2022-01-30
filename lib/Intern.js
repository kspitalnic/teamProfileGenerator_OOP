const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor (name, id, email, phone, school){
        super(name, id, email, phone);
        this.school = school; 
    }
    getPosition(){
        return "Intern"
    }

    getGithub(){
        return this.school;
    }
}

module.exports = Intern 