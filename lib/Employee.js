class Employee {
    constructor() {
      this.employees=[];
      this.employeesId=[];

      this.viewEmployees = 
        `SELECT e1.id, e1.first_name, e1.last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT(e2.first_name," ", e2.last_name) AS manager
        FROM employee AS e1 JOIN role ON e1.role_id = role.id
        JOIN department ON role.department_id = department.id
        JOIN employee As e2 ON e1.manager_id = e2.id
        ORDER BY e1.id;`;

      this.employeesQuery=
        `SELECT employee.id, employee.first_name, employee.last_name
        FROM employee`;

    }
    addEmployeeQuestions(availableRoles){
      return [
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
      { 
        type: 'list',
        message: 'What is the employees role?',
        name: 'employeeRole',
        choices: availableRoles
      },
      {
        type: 'list',
        message: 'Who is the employees manager?',
        name: 'employeeManager',
        choices: this.employees
      },
    ];
  }

    addEmployeeQuery(firstName, lastName, roleId, manager_id){

      return  `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES ("${firstName}", "${lastName}", "${roleId}", "${manager_id}")`;
      };
  }
  
  module.exports = Employee;
  