//importing node module and packages
const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];
//Add prompt questions about manager
const addManager = () => {
    return inquirer.createPromptModule([
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
            message: 'Please provide the name of the team manager',
        },
    ])
    .then((answers)=> {
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
            choices: ['Engineer', 'Intern', 'No Additional Team Members']
        },
    ])
    .then((addTeamMembersAnswers) => {
        switch (addTeamMembersAnswers.role) {
            case 'Engineer':
                return inquirer.prompt([
                    {
                        type: 'input',
                        name:'name',
                        message: 'What is the name of the engineer?',
                    },
                    {
                        type: 'input',
                        name:'id',
                        message: 'What is the name of the engineer?',
                    },
                    {
                        type: 'input',
                        name:'email',
                        message: 'What is the name of the engineer?',
                    },
                    {
                        type: 'input',
                        name:'github',
                        message: 'What is the name of the engineer?',
                    },
                ])
                .then ((engineerAnswers) => {
                    const { name, id, email, github } = engineerAnswers
                    const engineer = new Engineer (name, id, email, github);
                    teamMembers.push(engineer);
                    addEmployee();
                });
                break;
            case 'Intern':
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name of the intern?',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the id of the intern?',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email of the intern?',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school does the intern attend?',
                    },
                ])
                .then ((internAnswers) => {
                    const { name, id, email, school } = internAnswers
                    const intern = new Intern(name, id, email, school);
                    teamMembers.push(intern);
                    addEmployee();
                });
                break;
            default:
                console.log(teamMembers);
                const html = generateHTML(teamMembers) 
                fs.writeFile("./dist/index.html", html, (err) => {
                    if (err) throw err;
                    console.log("The file has been saved!");
                });
            
        }
    })
}