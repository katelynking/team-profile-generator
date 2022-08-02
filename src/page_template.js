const manager = (managerData) => {
  return `
  <div class="${managerData.getRole()}-card"> 
          <div class="${managerData.getRole()}-name">
            <h2 class="center">${managerData.getName()}</h2>
            <br>
    
            <h3 class="center">Role: ${managerData.getRole()}</h3>
          </div>
          <div class="employee-info">
            <ul class="list-group">
              <li class="list-group-item">ID: ${managerData.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>

`;
};

const engineer = (engineerData) => {
  return `
  <div class="${engineerData.getRole()}-card"> 
  <div class="${engineerData.getRole()}-name">
    <h2 class="center">${engineerData.getName()}</h2>
    <br>
    <h3 class="center">Role: ${engineerData.getRole()}</h3>
  </div> 
  <div class="employee-info">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineerData.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
      
      <li class="list-group-item">Github:
      <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
      </li>
    </ul>
  </div>
</div>
`;
};

const intern = (internData) => {
  return `
  <div class="${internData.getRole()}-card"> 
    <div class="${internData.getRole()}-name">
      <h2 class="center">${internData.getName()}</h2>
      <br>
      <h3 class="center">Role: ${internData.getRole()}</h3>
    </div> 
    <div class="employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${internData.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
        <li class="list-group-item">School: ${internData.getSchool()}</li>
      </ul>
    </div>
  </div>
</div>

`;
};

const employeesDiv = (employeesArr) => {
  let employeeHtml = "";

  for (i = 0; i < employeesArr.length; i++) {
    if (employeesArr[i].getRole() === "Manager") {
      employeeHtml = employeeHtml + manager(employeesArr[i]);
    }
    if (employeesArr[i].getRole() === "Engineer") {
      employeeHtml = employeeHtml + engineer(employeesArr[i]);
    }
    if (employeesArr[i].getRole() === "Intern") {
      employeeHtml = employeeHtml + intern(employeesArr[i]);
    }
  }
  return employeeHtml;
};

const template = (data) => {
  return `
  <!DOCTYPE html>
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
      ${employeesDiv(data)}
    </body>
  </html>
`;
};

module.exports = template;
