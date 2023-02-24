// const inquirer = require('inquirer');
// const fs = require('fs');
// const mysql = require('mysql2');            // Import and require mysql2

// // Connect to database
// const db = mysql.createConnection(
//     {
//       // MySQL username,
//       user: 'root',
//       // TODO: Add MySQL password here
//       password: 'C0d!ng',
//       database: 'company_db'
//     },
//     console.log(`Connected to the company_db database.`)
//   );

// // ----- INQUIRER PROMPTS ----- //
// const actionQuestions = [            
//     {
//     type: 'list',
//     message: 'What would you like to do?',
//     name: 'actionQuestion',
//     choices: ['View All Employees','Add Employee','Update Employee Role',
//     'View All Roles','Add ROle','View All Departments','Add Department','Quit'],
//     },
// ];

// const addDepartmentQuestion = [
//     {
//         type: 'input',
//         message: 'What is the name of the department?',
//         name: 'departmentName',
//     },
// ];

// const addRoleQuestion = [
//     {
//         type: 'input',
//         message: 'What is the name of the role?',
//         name: 'roleName',
//     },
//     {
//         type: 'input',
//         message: 'What is the salary of the role?',
//         name: 'roleSalary',
//     },
// ];



// const updateEmployeeRole = [            
//     // {
//     // type: 'list',
//     // message: "Which employee's role would you like to update?",
//     // name: 'employeeRoleUpdate',
//     // choices: 
//     // },
//     {
//         type: 'list',
//         message: "Which role would you like assigned to the selected employee?",
//         name: 'employeeRoleAssignment',
//         choices: roles,
//         },
// ];


// // ----- CATAGORIES FOR PROMPT QUESTIONS ----- //
// // const departments = [
// //     'Engineering', 'Finance', 'Legal', 'Sales', 'Service'
// // ];

// const employeeRole = [
//     'Sales Lead','Salesperson', 'Lead Engineer', 
//     'Software Engineer', 'Account Manager', 'Accountant', 
//     'Legal Team Lead', 'Lawyer', 'Customer Service'
// ];

// const employeeManagers = [
//     'None','Fred'
// ];

// const employees = [
//     'None','Fred'
// ];

// // Creates an array of questions for user input
// const questions = [
//             {
//                 type: 'list',
//                 message: 'What would you like to do?',
//                 name: 'actionQuestion',
//                 choices: actionQuestions,
//             },
//             {
//                 type: 'input',
//                 message: 'Contributing:',
//                 name: 'contributing',
//                 default: 'N/A',
//             },
//         ];

// // // Creates a function to write README file
// // function writeToFile(fileName, data) {

// //     const md = generateMarkdown(data)
// //     fs.writeFile("README.md",md, (err) => {
// //         if (err) {
// //             console.error(err)
// //         } else {
// //             console.log('Success: README.md File Generated!')
// //         }
// //     })
// // }

// // // Creates a function to initialize app
// // function init() {
// //     inquirer
// //         .prompt(questions)
// //         .then((data) => {
// //             const prompt = {
// //                 title: data.title,
// //                 description: data.description,
// //                 installation: data.installation,
// //                 usage: data.usage,
// //                 license: data.license,
// //                 contributing: data.contributing,
// //                 test: data.test,
// //                 username: data.username,
// //                 email: data.email
// //             }
// let prompt;
// let Name;
 
// for (let i=0; i<data.length;i++){
//   Name = questions[0].name;
//   console.log(Name)
//   prompt[i]= data.Name;
//   console.log(prompt)
// }
// //         writeToFile(prompt.title,prompt)
// // });
// // }

// // // Function call to initialize app
// // init();
