class Role {
    constructor() {
      this.viewRoles = 
      'SELECT role.id, role.title, department.name AS department,role.salary'
      + '\nFROM role JOIN department \nON role.department_id = department.id'
      + '\nORDER BY role.id;';
    }
  
  }
  
  module.exports = Role;
  