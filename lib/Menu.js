const inquirer = require('inquirer');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table
const Role = require('./Role');
const Department = require('./Department');
const Employee = require('./Employee');


class Menu {
    constructor() {
      this.menuQuestions = [            
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'actionQuestion',
          choices: ['View All Employees','Add Employee','Update Employee Role',
          'View All Roles','Add Role','View All Departments','Add Department','Quit']
        },
    ];

    
    }
  
    
  }
  
  module.exports = Menu;
  