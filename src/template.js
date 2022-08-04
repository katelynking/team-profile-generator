const index = require("../index");
const fs = require("fs");

let html = [];

const template = (teamMembers) => {
  for (i = 0; i < teamMembers.length; i++) {
    let employee = teamMembers[i].getRole();
    switch (employee) {
      case "Manager":
        manager(teamMembers[i]);
        break;

      case "Intern":
        intern(teamMembers[i]);
        break;

      case "Engineer":
        engineer(teamMembers[i]);
        break;
    }
  }

  function manager(manager) {
    let mCard = `
    
    <div class="${manager.getRole()}-card"> 
            <div class="${manager.getRole()}-name">
              <h2 class="center">${manager.getName()}</h2>
              <br>
      
              <h3 class="center">Role: ${manager.getRole()}</h3>
            </div>
            <div class="employee-info">
              <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
              </ul>
            </div>
          </div>
  
      `;
    html.push(mCard);
  }

  function engineer(engineer) {
    let eCard = `
    <div class="${engineer.getRole()}-card"> 
    <div class="${engineer.getRole()}-name">
      <h2 class="center">${engineer.getName()}</h2>
      <br>
      <h3 class="center">Role: ${engineer.getRole()}</h3>
    </div> 
    <div class="employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">www.github.com/${engineer.getGithub()}</a>
        </li>
      </ul>
    </div>

      `;
    html.push(eCard);
  }

  function intern(intern) {
    let iCard = `
    <div class="${intern.getRole()}-card"> 
    <div class="${intern.getRole()}-name">
      <h2 class="center">${intern.getName()}</h2>
      <br>
      <h3 class="center">Role: ${intern.getRole()}</h3>
    </div> 
    <div class="employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>

     `;
    html.push(iCard);
  }

  return `<!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
    </head>

    <body>
      <div class="row team">
      <div class="col-md-12">
        <div class="flex">
          <h1>MEET MY TEAM</h1>
        </div>
      </div>
    </div>
    <div class="col-md-4">
    ${html.join(" ")}
    </body>
  </html>
`;
};

const useTemplate = (teamMembers) => {
  fs.writeFile("./dist/team.html", template(teamMembers), () => {
    console.log("team.html file created!");
  });
};

module.exports = { useTemplate };
