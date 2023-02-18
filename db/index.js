const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



// ----- INQUIRER PROMPTS ----- //
const actionQuestions = [            
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'actionQuestion',
    choices: ['View All Employees','Add Employee','Update Employee Role',
    'View All Roles','Add ROle','View All Departments','Add Department','Quit'],
    },
];

const addDepartmentQuestion = [
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'departmentName',
    },
];

const addRoleQuestion = [
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary',
    },
];

const addEmployeeQuestions = [
    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'employeeFirstName',
    },
    {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'employeeLastName',
    },
];

// ----- CATAGORIES FOR PROMPT QUESTIONS ----- //
const departments = ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'
];

const employeeRole = [
    'Sales Lead','Salesperson', 'Lead Engineer', 
    'Software Engineer', 'Account Manager', 'Accountant', 
    'Legal Team Lead', 'Lawyer', 'Customer Service'
];


// Creates an array of questions for user input
const questions = [
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'actionQuestion',
                choices: actionQuestions,
            },
            {
                type: 'input',
                message: 'Contributing:',
                name: 'contributing',
                default: 'N/A',
            },
        ];

// Creates a function to write README file
function writeToFile(fileName, data) {

    const md = generateMarkdown(data)
    fs.writeFile("README.md",md, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: README.md File Generated!')
        }
    })
}

// Creates a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const prompt = {
                title: data.title,
                description: data.description,
                installation: data.installation,
                usage: data.usage,
                license: data.license,
                contributing: data.contributing,
                test: data.test,
                username: data.username,
                email: data.email
            }
        writeToFile(prompt.title,prompt)
});
}

// Function call to initialize app
init();
