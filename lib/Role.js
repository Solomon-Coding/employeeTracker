class Role {
    constructor() {
      this.viewRoles = 
        `SELECT role.id, role.title, department.name AS department,role.salary
        FROM role JOIN department
        ON role.department_id = department.id
        ORDER BY role.id;`;

      this.availableRolesQuery =
        `SELECT role.id, role.title, department.id AS d_id
        FROM role JOIN department ON role.department_id = department.id
        ORDER BY role.id;`;

      this.addEmployeeQuestions = [
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'employeeFirstName',
        },
        {
          type: 'input',
          message: 'What is the employees first name?',
          name: 'employeeFirstName',
        },
      ]

    }
  
  }
  
  module.exports = Role;
  