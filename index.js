var inquirer = require('inquirer');
var fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const generatePage = require('./src/generatePage');
const path = require('path');

const outputDirectory = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDirectory, 'index.html');

employees = [];

const BuildTeam = () => {
    const managerInput = [
        {
            type: 'input',
            name: 'name',
            message: `Please enter a team manager's name: `,
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            //clear input when isNan
            type: 'input',
            name: 'id',
            message: `Please enter the manager's employee ID number:  `,
            validate: managerID => {
                if ((isNaN(managerID)) || (!(managerID))) {
                    console.log("Please enter the manager's ID number.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            //make only accept an email
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address:  ",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager`s email.")
                    return false;
                }
            }
        },
        {
            //clear input when isNaN
            type: 'input',
            name: 'phone',
            message: `Please enter the manager's phone number:  `,
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log("Please enter the manager's phone number.")
                    return false;
                } else {
                    return true;
                }
            }
        }

    ];

    inquirer
        .prompt(managerInput)
        .then(answers => {
            console.log(answers);
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            const officeNumber = answers.officeNumber;
            const manager = new Manager(name, id, email, officeNumber);
            employees.push(manager);
            console.log(manager);
            console.log(employees);
            addMember();
        })
}


const addMember = () => {
    const memberInput = [
        {
            type: 'list',
            message: 'Would you like to add a new team member?',
            name: 'position',
            choices: ['Add an Engineer', 'Add an Intern', 'I am finished building my team!'],
        },
        {
            when: (response) => response.position !== 'I am finished building my team!',
            type: 'input',
            name: 'name',
            message: `Please enter the employee's name: `,
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.")
                    return false;
                }
            }
        },
        {
            //clear input when isNan
            when: (response) => response.position !== 'I am finished building my team!',
            type: 'input',
            name: 'id',
            message: `Please enter the employee's ID number:  `,
            validate: id => {
                if ((isNaN(id)) || (!(id))) {
                    console.log("Please enter the employee's ID number.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            //make only accept an email
            when: (response) => response.position !== 'I am finished building my team!',
            type: 'input',
            name: 'email',
            message: `Please enter the employee's email address:  `,
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter the employee"s email.')
                    return false;
                }
            }
        },
        {
            //make only accept an email
            when: (response) => response.position === 'Add an Engineer',
            type: 'input',
            name: 'github',
            message: `Please enter the employee's github username:  `,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the employee"s github username.')
                    return false;
                }
            }
        },
        {
            //make only accept an email
            when: (response) => response.position === 'Add an Intern',
            type: 'input',
            name: 'school',
            message: `Please enter the employee's school:  `,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the employee"s school.')
                    return false;
                }
            }
        },
    ]


    inquirer
        .prompt(memberInput)
        .then(memberAnswers => {
            const name = memberAnswers.name;
            const id = memberAnswers.id;
            const email = memberAnswers.email;
            if (memberAnswers.position === 'I am finished building my team!') {
                console.log("finished");

                function writeFile(employees) {
                    fs.writeFile(outputPath, employees, (err) => {
                        if (err) throw new Error(err);

                        console.log('Success! Your employee team page should now appear.');

                    })
                }

                writeFile(generatePage(employees));
                return 

            }
            else if (memberAnswers.position === 'Add an Intern') {
                const school = memberAnswers.school
                const intern = new Intern(name, id, email, school);
                employees.push(intern);
                console.log(intern);
                console.log(employees);
            }
            else {
                const github = memberAnswers.github;
                const engineer = new Engineer(name, id, email, github);
                employees.push(engineer);
                console.log(engineer);
                console.log(employees);
            }
addMember();
        })
}


BuildTeam()



