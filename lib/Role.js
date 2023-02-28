class Role {
    constructor() {
      this.viewRoles = 
        `SELECT role.id, role.title, department.name AS department,role.salary
        FROM role JOIN department
        ON role.department_id = department.id
        ORDER BY role.id;`;

      this.availableRolesQuery =
        `SELECT role.id, role.title
        FROM role
        ORDER BY role.id;`;

      this.availableRoles=[];
      this.availableRolesId=[];
    };

    addRoleQuestions(availableDepartments){
      return [
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
      {
        type: 'list',
        message: 'What department does the role belong to?',
        name: 'department',
        choices: availableDepartments,
      },
      ]
    };

    addRoleQuery(title,salary,department_id){
      return `INSERT INTO role (title, salary, department_id)\nVALUES ("${title}", "${salary}", "${department_id}");`;
    };

    updateRoleQuestions(){

    };

    updateRoleQuery(){
      
    };
  }
  
  module.exports = Role;
  