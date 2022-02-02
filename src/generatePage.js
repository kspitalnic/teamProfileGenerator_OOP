
const generatePage = (employees) => {
    Object.keys(employees).forEach(key => {
        console.log(employees[key].name);
        name = employees[key].name;
        id = employees[key].id;
        email = employees[key].email;
        console.log(name, id, email);
    })
    function generateManager (Manager) {
        return `
        <li>
        <div class = "cardHead">
          <ul>  <h4>${Manager.getName()} </h4> </ul>
          <ul> <h5><em>${Manager.getRole()}</em></h5> </ul>
        </div>
        <div class = "cardBody">
          <ul>  <p class = "id"> ${Manager.getId()}</p></ul>
           <ul> <p class = "email"> <a href = mailto: ${Manager.getEmail()}> ${Manager.getEmail()} </a> </p></ul>
        </div>
        </li>`
    }

    function generateEngineer (Engineer) {
        return `
        ${Engineer.getName()}`
    }

    function generateIntern (Intern) {
        return `
        ${Intern.getName()}`
    }

    const html =[]; 

    html.push(employees.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager)));


    html.push(employees.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer)).join(''));


    html.push(employees.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern)).join(''));


    return html.join('');
};

module.exports = team =>{
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
            ${generatePage(team)}
            </div>
        </div>

    </body>
    `;
};


