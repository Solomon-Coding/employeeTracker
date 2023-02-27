class Role {
    constructor() {
      this.viewRoles = 
        'SELECT role.id, role.title, department.name AS department,role.salary'
        + '\nFROM role JOIN department \nON role.department_id = department.id'
        + '\nORDER BY role.id;';

      this.availableRolesQuery =
        'SELECT role.id, role.title \nFROM role \n  ORDER BY role.id';

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
  