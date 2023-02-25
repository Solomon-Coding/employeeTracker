class Department {
    constructor() {
      this.addDepartmentQuestions = [
        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'departmentName',
        },
      ]
      this.viewDepartments = 
      'SELECT * FROM department;';
    }
    
  
  }
  
  module.exports = Department;
  