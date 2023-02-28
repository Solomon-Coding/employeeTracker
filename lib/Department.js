class Department {
    constructor() {
      this.availableDepartments=[];
      this.availableDepartmentsId=[];

      this.viewDepartments = 
        `SELECT * FROM department;`;

      this.availableDepartmentsQuery =
        `SELECT department.id, department.name
        FROM department
        ORDER BY department.id;`;

      this.addDepartmentQuestions = [
        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'departmentName',
        },
      ]
    };

    addDepartmentQuery(newDepartment){
      return `INSERT INTO department (name)\nVALUES ("${newDepartment}");`;
    };

    updateDepartmentQuestions(){

    };
  
    updateDepartmentQuery(){
        
    };
  }
  
  module.exports = Department;
  