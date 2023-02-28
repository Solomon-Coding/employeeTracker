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
            return this.QueryDisplay(this.employee.viewEmployees);
      
          case "Add Employee":
            return this.addEmployee();
      
          case "View All Roles":
            return this.QueryDisplay(this.role.viewRoles);
      
          case "Add Role":
            return this.addRole();

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
      this.availableDepartmentsFnc()
      inquirer
      .prompt(this.role.addRoleQuestions(this.department.availableDepartments))
      .then((data) => {
        let index1 = this.department.availableDepartments.findIndex(element => element == data.department);
        console.log(index1)
        this.QueryAdd(this.role.addRoleQuery(data.roleName, data.roleSalary, this.department.availableDepartmentsId[index1]),"Added "+data.roleName+" to the database");
      })
    }

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
        this.QueryAdd(this.employee.addEmployeeQuery(prompt.first, prompt.last,
          this.role.availableRolesId[index1],this.department.availableDepartmentsId[index1], this.employee.employeesId[index2]),
          "Added "+prompt.first+" "+prompt.last+" to the database")
      });
    }
}
  module.exports = Menu;
  