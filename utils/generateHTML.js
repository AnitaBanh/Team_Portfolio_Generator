//Create function that renders school name if intern is selected, github if Engineer is selected
function renderVariableInfo (data) {
if(data.role == Manager) {
    return `Office number ${data.phone}`;}
    if(data.role == Engineer) {
   return `GitHub URL:${data.GitHub}`
    }
    if(data.role == Intern) {
     return `School: ${data.school}`
    }
}
    

//Create function that populates the role subtitle. 
    // ADD emoji coffee, glasses
function renderRole (data) {
    if(data.role == Manager) {
        return `Manager`;}
        if(data.role == Engineer) {
       return `Engineer`
        }
        if(data.role == Intern) {
         return `Intern`
        }
    }

function generateHTML(data) {
    return `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Portfolio</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          </head>
          <body>
          
          <div class="card">
          <h5 class="card-header">${data.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
          <div class="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li> 
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">${renderVariableInfo}</li>
        </ul>
          </div>
        </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
          </body>
        </html>
        `};