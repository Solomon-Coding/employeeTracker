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
          'View All Roles','Add Role','View All Departments','Add Department','Quit']
        },
      ];
    }
    employee = new Employee();
    role = new Role();
    department = new Department();

    availableRolesFnc(){
      db.query(this.role.availableRolesQuery, (err, result) => {
        for (let i=0; i<result.length;i++){    
          this.employee.availableRoles[i]=result[i].title;
          this.employee.availableRolesId[i]=result[i].id;
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
            return this.QueryDisplay(this.employee.viewEmployees);
      
          case "Add Employee":
            return this.addEmployee();
      
          case "View All Roles":
            return this.QueryDisplay(this.role.viewRoles);
      
          case "View All Departments":
            return this.QueryDisplay(this.department.viewDepartments);
          
          case "Add Department":
            return this.addDepartment();
      
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

    QueryAdd(sql, msg){
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
        this.QueryAdd(this.department.addDepartmentQuery(data.departmentName),"Added "+data.departmentName+" to the database");
      })
    }
    
    addRole(){

    }

    addEmployee(){
      this.availableRolesFnc()
      this.employeesFnc()
      inquirer
      .prompt(this.employee.addEmployeeQuestions)
      .then((data) => {
        const prompt = {
          first:data.employeeFirstName,
          last:data.employeeLastName,
          role:data.employeeRole,
          manager:data.employeeManager
        }
        let index1 = this.employee.availableRoles.findIndex(element => element == prompt.role)
        let index2 = this.employee.employees.findIndex(element => element == prompt.manager)
          this.QueryAdd(this.employee.addEmployeeQuery(prompt.first, prompt.last,
            this.employee.availableRolesId[index1], this.employee.employeesId[index2]),
            "Added "+prompt.first+" "+prompt.last+" to the database")
      });
    }
}
  module.exports = Menu;
  