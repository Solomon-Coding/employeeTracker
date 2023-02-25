const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table
const Menu = require('./lib/Menu');
const Role = require('./lib/Role');
const Department = require('./lib/Department');
const Employee = require('./lib/Employee');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'C0d!ng',
      database: 'company_db'
    },
    // console.log(`Connected to the company_db database.`)
  );

// ----- INQUIRER PROMPTS ----- //
// const menuQuestions = [            
//     {
//     type: 'list',
//     message: 'What would you like to do?',
//     name: 'actionQuestion',
//     choices: ['View All Employees','Add Employee','Update Employee Role',
//     'View All Roles','Add Role','View All Departments','Add Department','Quit']
//     },
// ];

// const addEmployeeQuestions = [
//   {
//       type: 'input',
//       message: 'What is the employees first name?',
//       name: 'employeeFirstName',
//   },
//   {
//       type: 'input',
//       message: 'What is the employees last name?',
//       name: 'employeeLastName',
//   },
// ];

// const addDepartmentQuestions = [
//   {
//     type: 'input',
//     message: 'What is the name of the department?',
//     name: 'departmentName',
//   },
// ]

// ----- QUERY PROMPTS ----- //

// EMPLOYEES
// const viewEmployees = 
//   'SELECT e1.id, e1.first_name, e1.last_name, role.title AS title,'
//   + 'department.name AS department, role.salary AS salary,'
//   + 'CONCAT(e2.first_name," ", e2.last_name) AS manager \nFROM employee AS e1'
//   + '\nJOIN role ON e1.role_id = role.id \nJOIN department ON role.department_id'
//   + '= department.id \nJOIN employee As e2 ON e1.manager_id = e2.id \nORDER BY e1.id;';

// ROLES
const viewRoles = 
  'SELECT role.id, role.title, department.name AS department,role.salary'
  + '\nFROM role JOIN department \nON role.department_id = department.id'
  + '\nORDER BY role.id;';

// DEPARTMENTS
const viewDepartments = 
  'SELECT * FROM department;';

// Initialization function.
function inquirerMenu(questions) {
  console.log()
  inquirer
      .prompt(questions)
      .then((data) => {
        const prompt = data.actionQuestion
          menu(prompt)
  });
};

inquirerMenu(Menu.menuQuestions)

function menu(prompt){
let sql;
let params;
  switch(prompt) {
    case "View All Employees":
      sql = viewEmployees;
      params = [];
      Query(sql,params);

      
      break;

    case "Add Employee":
      addEmployee(addEmployeeQuestions);
      // inquirerMenu(menuQuestions);
      break;

    case "View All Roles":
      sql = viewRoles;
      params = [];
      Query(sql,params);
      // inquirerMenu(menuQuestions);
      break;

    case "View All Departments":
      sql = viewDepartments;
      params = [];
      Query(sql,params);
      // inquirerMenu(menuQuestions);
      break;
    
    case "Add Department":
      sql = addDepartment;
      params = [];
      Query(sql,params);
      // inquirerMenu(menuQuestions);
      console.log("Added" + sql + "to the database") 
      break;

    case "Quit":
      console.log("\nGoodbye")
      db.end();
      break;
  };
}

// Inquirer function

function inquirerFunction(question){
  
}

// Function the completes query requests
async function Query(sql,params){
  db.query(sql, params, (err, result) => {
    console.log("\n")
    console.table(result)
});
  setTimeout(() => {
    inquirerMenu(menuQuestions);
  }, "500");
};

// In progress
function addEmployee(question){
  sql = 'SELECT * FROM employee;';
  params = [];
  Query(sql,params)
}