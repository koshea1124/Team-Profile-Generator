const fs = require('fs');

const createProfilePage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <!-- CSS Reset -->
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../dist/style.css">
    
    </head>
    
    <body>
    <header>
        <nav class="navbar">
            <div class="container">
              <span class="navbar-brand">The Office: Scranton, PA</span>
            </div>
          </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="teamCards">
                <!-- Insert Team Profile Cards here -->
                ${employeeCards}
            </div>

        </div>
    </main>
    

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
</html>
`;
}

//Manager Card
const createManager = function (manager) {
    return `
    <li class="col-md-6 col-lg-4 mb-4">
        <div class="card memberCard">
            <div class="card-header bg-primary text-light">
                <h2 class="fs-4"></h2>
                <h3 class="title fs-5"><span class="me-2"><i class="fa-solid fa-mug-hot"></i></span>Manager:${manager.name} </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </li>
    `;
}

//Engineer Card
const createEngineer = function (engineer) {
    return `
    <li class="col-md-6 col-lg-4 mb-4">
        <div class="card memberCard">
            <div class="card-header bg-primary text-light">
                <h2 class="fs-4"></h2>
                <h3 class="title fs-5"><span class="me-2"><i class="fa-solid fa-glasses"></i></span>Engineer: ${engineer.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </li>
    `;
}

// Intern Card
const createIntern = function (intern) {
    return `
    <li class="col-md-6 col-lg-4 mb-4">
        <div class="card memberCard">
            <div class="card-header bg-primary text-light">
                <h2 class="fs-4"></h2>
                <h3 class="title fs-5"><span class="me-2"><i class="fa-sharp fa-solid fa-graduation-cap"></i></span>Intern: ${intern.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </li>
    `;
}

// generate HTML array to push to page
generateHTML = (data) => {
    profileArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManager(employee);
            profileArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = createEngineer(employee);
            profileArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = createIntern(employee);
            profileArray.push(internCard);
        }

        
        
    }
    const employeeCards = profileArray.join("");
    const createTeam = createProfilePage(employeeCards);
    return createTeam;
}

module.exports = generateHTML;