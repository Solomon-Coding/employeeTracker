const inquirer = require('inquirer');
const mysql = require('mysql2');            // Import and require mysql2
require('console.table');                   // Import and require console.table
const Role = require('./Role');
const Department = require('./Department');
const Employee = require('./Employee');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'C0d!ng',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

class Menu {
    constructor() {
      this.menuQuestions = [            
        {
          type: 'list',
          message: 'What would you like to do?',
          name: 'actionQuestion',
          choices: ['View All Employees','Add Employee','Update Employee Role',
          'View All Roles','Add Role','View All Departments','Add Department','Quit'] //,'View Total Utilized Budget'
        },
      ];

      this.totalUtilizedBudgetQuestions = [
        {
          type: 'list',
          message: 'Which department would you like to find the total utilized budget for?',
          name: 'utilizedBudget',
          choices: this.department.availableDepartments
        },
      ]
    }
    employee = new Employee();
    role = new Role();
    department = new Department();

    totalUtilizedBudgetQuery(departmentID){
      return `  SELECT SUM(role.salary)
            FROM role
            WHERE role.id = employee.role_id IN (SELECT employee.role_id 
                                                FROM employee
                                                WHERE department_id = ${departmentID})`
    }

    availableRolesFnc(){
      db.query(this.role.availableRolesQuery, (err, result) => {
        for (let i=0; i<result.length;i++){   
          this.role.availableRoles[i]=result[i].title;
          this.role.availableRolesId[i]=result[i].id;
          this.department.availableDepartmentsId[i]=result[i].d_id;
        }
      }); 
    } 

    availableDepartmentsFnc(){
      db.query(this.department.availableDepartmentsQuery, (err, result) => {
        for (let i=0; i<result.length;i++){   
          this.department.availableDepartments[i] = result[i].name;
          this.department.availableDepartmentsId[i]=result[i].id;
        }
      });
    }

    employeesFnc(){
      db.query(this.employee.employeesQuery, (err, result) => {
        for (let i=0; i<result.length;i++){   
          this.employee.employees[i]=result[i].first_name+' '+result[i].last_name;
          this.employee.employeesId[i]=result[i].id;
        }
        this.employee.employees.unshift("None");
      }); 
    } 

    menu(prompt){
        switch(prompt) {
          case "View All Employees":
              this.employeesFnc();
            return this.QueryDisplay(this.employee.viewEmployees);
      
          case "Add Employee":
            return this.addEmployee();

          case "Update Employee Role":
            return this.updateEmployee();
      
          case "View All Roles":
              this.availableRolesFnc();
            return this.QueryDisplay(this.role.viewRoles);
      
          case "Add Role":
            return this.addRole();

          case "View All Departments":
              this.availableDepartmentsFnc();
            return this.QueryDisplay(this.department.viewDepartments);
          
          case "Add Department":
            return this.addDepartment();
      
            case "View Total Utilized Budget":
              return this.totalUtilizedBudget();

          case "Quit":
            console.log("\nGoodbye")
            return db.end();
        };
      };

    QueryDisplay(sql){
        db.query(sql, (err, result) => {
          console.log("\n")
          console.table(result)
        });
        setTimeout(() => {
          this.inquirerMenu(this.menuQuestions);
        }, "500");
      };

    queryGeneral(sql, msg){
      db.query(sql, (err, result) => {
        console.log(msg)
      });
      setTimeout(() => {
        this.inquirerMenu(this.menuQuestions);
      }, "500");
    };

    inquirerMenu() {
        console.log()
        inquirer
            .prompt(this.menuQuestions)
            .then((data) => {
                this.menu(data.actionQuestion)
        });
      };

    addDepartment(){
      inquirer
      .prompt(this.department.addDepartmentQuestions)
      .then((data) => {
        this.queryGeneral(this.department.addDepartmentQuery(data.departmentName),"Added "+data.departmentName+" to the database");
      })
    };
    
    addRole(){
      this.availableDepartmentsFnc()
      inquirer
      .prompt(this.role.addRoleQuestions(this.department.availableDepartments))
      .then((data) => {
        let index1 = this.department.availableDepartments.findIndex(element => element == data.department);
        this.queryGeneral(this.role.addRoleQuery(data.roleName, data.roleSalary, this.department.availableDepartmentsId[index1]),"Added "+data.roleName+" to the database");
      })
    };

    addEmployee(){
      this.availableRolesFnc()
      this.availableDepartmentsFnc()
      this.employeesFnc()
      inquirer
      .prompt(this.employee.addEmployeeQuestions(this.role.availableRoles))
      .then((data) => {
        const prompt = {
          first:data.employeeFirstName,
          last:data.employeeLastName,
          role:data.employeeRole,
          manager:data.employeeManager
        }
        let index1 = this.role.availableRoles.findIndex(element => element == prompt.role);
        let index2 = this.employee.employees.findIndex(element => element == prompt.manager);
        // if (prompt.manager == "None"){
        //   console.log('yes!')
        //   prompt.manager == "NULL"
        // }
        this.queryGeneral(this.employee.addEmployeeQuery(prompt.first, prompt.last,
          this.role.availableRolesId[index1],this.department.availableDepartmentsId[index1], this.employee.employeesId[index2]),
          "Added "+prompt.first+" "+prompt.last+" to the database")
      });
    };

    updateEmployee(){
      this.employeesFnc();
      inquirer
      .prompt(this.employee.updateEmployeeQuestions(this.employee.employees,this.role.availableRoles))
      .then((data) => {
        let index1 = this.role.availableRoles.findIndex(element => element == data.updateEmployeeRole)
        this.queryGeneral(this.employee.updateEmployeeQuery(this.role.availableRolesId[index1], data.updateEmployeeName),"Updated employee's role");
      })
    };

    //NOT Currently Working
    // totalUtilizedBudget(){
    //   this.availableDepartmentsFnc()
    //   inquirer
    //   .prompt(this.totalUtilizedBudgetQuestions)
    //   .then((data) => {
    //     let index1 = this.department.availableDepartments.findIndex(element => element == data.utilizedBudget)
    //     this.queryGeneral(this.totalUtilizedBudgetQuery(this.role.availableDepartmentsId[index1]),`Total utilized budget for the ${data.utilizedBudget} department`);
    //   })
    // }
}
  module.exports = Menu;
  