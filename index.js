//importing node module and packages
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];
//Add prompt questions about manager
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide the name of the team manager',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide the ID of the team manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide the email of the team manager',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please provide the office Number of the team manager',
        },
    ])
    .then(answers => {
        const { name, id, email, officeNumber } = answers
        const manager = new Manager (name, id, email, officeNumber);
        teamMembers.push(manager);
    })
};

//Add prompt questions about employee
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the team member that you would like to add?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name:'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name:'id',
            message: 'What is the id number of the employee?',
        },
        {
            type: 'input',
            name:'email',
            message: 'What is the email of the employee?',
        },
        {
            type: 'input',
            name:'github',
            message: 'What is the github username of the employee?',
            when: (input) => input.role === 'Engineer',
        },   
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (input) => input.role === 'Intern',
        },
        {
            type:'confirm',
            name: 'addAdditionalEmployees',
            message: 'Would you like to add additional employees',
            default: false
        }
    ])
    .then(employeePrompts => {
        let { role, name, id, email, github, school, addAdditionalEmployees } = employeePrompts;
        let employee;
        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        }
        teamMembers.push(employee);

        if (addAdditionalEmployees) {
            return addEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
};
//Function to create HTML Page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Check the dist folder to see your team profile!')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });
