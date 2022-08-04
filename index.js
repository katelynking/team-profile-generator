const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { useTemplate } = require("./src/template");


let teamMembers = [];
// let teamIds = [];

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
      },

      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },

      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum",
      },
    ])
    .then((response) => {
      teamMembers.push(
        new Manager(
          response.name,
          parseInt(response.id),
          response.email,
          parseInt(response.officeNum))
        );
        
        employeeInfo();
        
        });

}

function employeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee's role?",
        name: "employeeRole",
        choices: ["Intern", "Engineer"],
      },

      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },

      {
        type: "input",
        message: "What is the employee's email?",
        name: "email",
      },

      {
        type: "input",
        message: "What is the Engineer's GitHub?",
        name: "github",
        when: (userInput) => userInput.employeeRole === "Engineer",
      },

      {
        type: "input",
        message: "What is the Intern's school?",
        name: "school",
        when: (userInput) => userInput.employeeRole === "Intern",
      },

      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "newMember",
      },
    ])
    .then((response) => {
      if (response.employeeRole === "Engineer") {
        const employee = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        teamMembers.push(employee);
      } else if (response.employeeRole === "Intern") {
        teamMembers.push(
          new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          )
        );
      }
      if (response.newMember === true) {
        employeeInfo();
      } else {
        useTemplate(teamMembers);
      }
    })
  }
managerInfo();