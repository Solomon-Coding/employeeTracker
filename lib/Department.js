class Department {
    constructor() {
      this.viewDepartments = 
        'SELECT * FROM department;';

      this.addDepartmentQuestions = [
        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'departmentName',
        },
      ]
    }
    
  
  }
  
  module.exports = Department;
  