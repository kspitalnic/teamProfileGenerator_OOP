
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
        <div class = "card">
        <div class = "cardHead">
          <ul>  <h4>${Manager.getName()} </h4> </ul>
          <ul> <h5> <i class="fas fa-mug-hot"> </i></i>
          <em> ${Manager.getRole()}</em></h5> </ul>
        </div>
        <div class = "cardBody">
           <ul>  <p class = "item"> Employee ID: ${Manager.getId()}</p></ul>
           <ul> <p class = "item"> Email: <a href = mailto: ${Manager.getEmail()}>${Manager.getEmail()} </a> </p></ul>
           <ul> <p class = "item"> Office Number: ${Manager.getOfficeNumber()} </p></ul>
        </div>
        </div>
        </li>`
    }

    function generateEngineer (Engineer) {
        return `
        <li>
        <div class = "card">
        <div class = "cardHead">
          <ul>  <h4>${Engineer.getName()} </h4> </ul>
          <ul> <h5> <i class="fas fa-glasses"> </i></i>
          <em> ${Engineer.getRole()}</em></h5> </ul>
        </div>
        <div class = "cardBody">
           <ul>  <p class = "item"> Employee ID: ${Engineer.getId()}</p></ul>
           <ul> <p class = "item"> Email: <a href = mailto: ${Engineer.getEmail()}>${Engineer.getEmail()} </a> </p></ul>
           <ul> <p class = "item"> GitHub: <a href = https://github.com/${Engineer.getGithub()} target=_blank> ${Engineer.getGithub()}</a> </p></ul>
        </div>
        </div>
        </li>`
    }

    function generateIntern (Intern) {
        return `
        <li>
        <div class = "card">
        <div class = "cardHead">
          <ul>  <h4>${Intern.getName()} </h4> </ul>
          <ul> <h5> <i class="fas fa-user-graduate"> </i></i>
          <em> ${Intern.getRole()}</em></h5> </ul>
        </div>
        <div class = "cardBody">
           <ul>  <p class = "item"> Employee ID: ${Intern.getId()}</p></ul>
           <ul> <p class = "item"> Email: <a href = mailto: ${Intern.getEmail()}>${Intern.getEmail()} </a> </p></ul>
           <ul> <p class = "item"> School: ${Intern.getSchool()} </p></ul>
        </div>
        </div>
        </li>`
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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Team Profiles</title>
    </head>
    
    <body>
        <header>My Team</header>
    
        <div class="container col-md-5">
            <div class="row">
            ${generatePage(team)}
            </div>
        </div>

    </body>
    `;
};


