const inquirer = require('inquirer');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table
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
  // console.log(`Connected to the company_db database.`)
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

    menu(prompt){
      let sql;
      let params;
        switch(prompt) {
          case "View All Employees":
            return this.Query(this.employee.viewEmployees);
      
          case "Add Employee":
            // this.Query(this.employee.addEmployeeQuestions)
            return this.Query(this.employee.addEmployeeQuestions);
      
          case "View All Roles":
            return this.Query(this.role.viewRoles);
      
          case "View All Departments":
            return this.Query(this.department.viewDepartments)
          
          case "Add Department":
            sql = addDepartment;
            params = [];
            Query(sql,params);
            // inquirerMenu(menuQuestions);
            console.log("Added" + sql + "to the database") 
            break;
      
          case "Quit":
            console.log("\nGoodbye")
            return db.end();
        };
      };

    Query(sql){
        db.query(sql, (err, result) => {
          console.log("\n")
          console.table(result)
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


//     inquirerFunction(questions){
//     let questionName=[];
//     let prompt = [];
//     for (let i=0;i<questions.length;i++){
//         questionName[i]= [questions[i].name];
//     }

//     inquirer
//     .prompt(questions)
//     .then((data) => {
//       for (let i=0; i<questionName.length; i++){
//         prompt[i] = this.index(data,questionName[i])
//       }
//     //   console.log(prompt)
//   });
//     return prompt
//   }

//   index(obj,is, value) {
//     if (typeof is == 'string')
//         return index(obj,is.split('.'), value);
//     else if (is.length==1 && value!==undefined)
//         return obj[is[0]] = value;
//     else if (is.length==0)
//         return obj;
//     else
//         return this.index(obj[is[0]],is.slice(1), value);
// }
  }
  
  module.exports = Menu;
  