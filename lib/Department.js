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
    addDepartmentQuery(newDepartment){
      return 'INSERT INTO department (name)\nVALUES ('+newDepartment+');'
    }
  }
  
  module.exports = Department;
  