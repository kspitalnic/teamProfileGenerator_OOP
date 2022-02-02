const Manager = require('../lib/Manager.js');


const generatePage = (employees) => {
    employees = JSON.parse(employees);
    console.log('result' + employees);
    Object.keys(employees).forEach(key => {
        console.log(key, employees[key].name);
      });
    return `
    <!DOCTYPE html> 

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <title>Team Profiles</title>
    </head>
    
    <body>
        <header>My Team</header>
    
        <div class="container">
            <div class="row">
                <div class = "cardHead">
                    <h4> ${Manager.getPosition} </h4>
                    <h4> ${Manager.name}</h4>
                </div>
                <div class = "cardBody">
                    <p class = "id"> ${Manager.id}</p>
                    <p class = "email"> <a href = mailto: ${Manager.email}> ${Manager.email} </a> </p>

            </div>
        </div>

    </body>
    `;
  };

module.exports = generatePage;

