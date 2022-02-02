
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
        ${Manager.getName()}`
    }
    const html =[]; 
    html.push(employees.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager)));

    html.push(employees.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateManager(engineer))).join('');
    
//map - similar to for each. takes object one at a time 


    html.push(employees.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateManager(intern))).join('');
    //add engineer and intern function 

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






    // return `
    // <!DOCTYPE html> 

    // <head>
    //     <meta charset="utf-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1">
    //     <link rel="stylesheet" href="style.css">
    //     <title>Team Profiles</title>
    // </head>
    
    // <body>
    //     <header>My Team</header>
    
    //     <div class="container">
    //         <div class="row">
    ---
    //             <div class = "cardHead">
    //                 <h4> ${name} </h4>
    //                 <h4> ${name}</h4>
    //             </div>
    //             <div class = "cardBody">
    //                 <p class = "id"> ${id}</p>
    //                 <p class = "email"> <a href = mailto: ${email}> ${email} </a> </p>
---
    //         </div>
    //     </div>

    // </body>
    // `;