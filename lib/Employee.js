const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table

class Employee {
    constructor() {
      this.addEmployeeQuestions = [
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

      this.viewEmployees = 
        'SELECT e1.id, e1.first_name, e1.last_name, role.title AS title,'
        + 'department.name AS department, role.salary AS salary,'
        + 'CONCAT(e2.first_name," ", e2.last_name) AS manager \nFROM employee AS e1'
        + '\nJOIN role ON e1.role_id = role.id \nJOIN department ON role.department_id'
        + '= department.id \nJOIN employee As e2 ON e1.manager_id = e2.id \nORDER BY e1.id;';
    }
  
  }
  
  module.exports = Employee;
  