const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table

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
const menuQuestions = [            
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'actionQuestion',
    choices: ['View All Employees','Add Employee','Update Employee Role',
    'View All Roles','Add Role','View All Departments','Add Department','Quit']
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

// ----- QUERY PROMPTS ----- //
const viewEmployees = 
  'SELECT * FROM employee;';

const viewRoles = 
  'SELECT role.id, role.title, department.name AS department,role.salary'
  + '\nFROM role JOIN department \nON role.department_id = department.id'
  + '\nORDER BY role.id;';

const viewDepartments = 
  'SELECT * FROM department;';

// Initialization function.
function init(questions) {
  console.log()
  inquirer
      .prompt(questions)
      .then((data) => {
        const prompt = data.actionQuestion
          menu(prompt)
  });
};

init(menuQuestions)

function menu(prompt){
let sql;
let params;
  switch(prompt) {
    case "View All Employees":
      sql = viewEmployees;
      params = [];
      Query(sql,params);
      // init(menuQuestions);
      break;

    case "Add Employee":
      addEmployee(addEmployeeQuestions);
      // init(menuQuestions);
      break;

    case "View All Roles":
      sql = viewRoles;
      params = [];
      Query(sql,params);
      // init(menuQuestions);
      break;

    case "View All Departments":
      sql = viewDepartments;
      params = [];
      Query(sql,params);
      // init(menuQuestions);
      break;

    case "Quit":
      console.log("\nGoodbye")
      db.end();
      break;
  };
}

// Function the completes query requests
function Query(sql,params){
  db.query(sql, params, (err, result) => {
    console.log("\n")
    console.table(result)
});
}

function addEmployee(question)

{
  sql = 'SELECT * FROM employee;';
  params = [];
  Query(sql,params)
}