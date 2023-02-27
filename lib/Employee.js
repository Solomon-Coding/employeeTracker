class Employee {
    constructor() {
      this.viewEmployees = 
      'SELECT e1.id, e1.first_name, e1.last_name, role.title AS title,'
      + 'department.name AS department, role.salary AS salary,'
      + 'CONCAT(e2.first_name," ", e2.last_name) AS manager \nFROM employee AS e1'
      + '\nJOIN role ON e1.role_id = role.id \nJOIN department ON role.department_id'
      + '= department.id \nJOIN employee As e2 ON e1.manager_id = e2.id \nORDER BY e1.id;';

      this.availableRoles=[];
      this.availableRolesId=[];
      this.employees=[];
      this.employeesId=[];

      this.employeesQuery='SELECT employee.id, employee.first_name, employee.last_name'
        +'\nFROM employee';

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
        { 
          type: 'list',
          message: 'What is the employees role?',
          name: 'employeeRole',
          choices: this.availableRoles
        },
        {
          type: 'list',
          message: 'Who is the employees manager?',
          name: 'employeeManager',
          choices: this.employees
        },
      ];


    }
    addEmployeeQuery(firstName,lastName,roleId,manager_id){

      return 'INSERT INTO employee (first_name, last_name, role_id, manager_id)\n'
        + 'VALUES ('+firstName, lastName, roleId, '1', manager_id+')'
      };
  }
  
  module.exports = Employee;
  