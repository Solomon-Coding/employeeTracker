const inquirer = require('inquirer');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table
// const Role = require('./Role');
// const Department = require('./Department');
// const Employee = require('./Employee');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'C0d!ng',
    database: 'company_db'
  },
  // console.log(`Connected to the company_db database.`)
);


function QueryAdd(sql){
    let val=[];
    db.query(sql, (err, result) => {
        // console.log(result)
        for (let i=0; i<result.length;i++){
            
            val[i]=result[i].title;
        }
        console.log(val)  
      });
      console.log(val)
    };

 QueryAdd('SELECT role.id, role.title \nFROM role \n  ORDER BY role.id')
//  console.log(val)
