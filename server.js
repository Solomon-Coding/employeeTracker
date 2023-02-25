const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');            // Import and require mysql2
const cTable = require('console.table');    // Import and require console.table
const { Console } = require('console');



const addEmployeeQuestions = [
    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'employeeFirstName',
    },
    {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'employeeLastName',
    },
  ];

function inquirerFunction(questions){
    let questionName=[];
    let prompt = [];
    for (let i=0;i<questions.length;i++){
        questionName[i]= [questions[i].name];
        console.log(questionName)
    }

    inquirer
    .prompt(questions)
    .then((data) => {
      for (let i=0; i<questionName.length; i++){
        prompt[i] = index(data,questionName[i])
      }
    //   console.log(prompt)
  });
    return prompt
  }

  inquirerFunction(addEmployeeQuestions)

  function index(obj,is, value) {
    if (typeof is == 'string')
        return index(obj,is.split('.'), value);
    else if (is.length==1 && value!==undefined)
        return obj[is[0]] = value;
    else if (is.length==0)
        return obj;
    else
        return index(obj[is[0]],is.slice(1), value);
}