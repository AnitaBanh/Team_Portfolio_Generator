const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager");

//create team function Which type of team member would you like to add?
const teamMembers = [];
const idArray = [];

// wraps the entire including html function  --- function menu() {}
// call function menu ();

function createManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team manager name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the employee email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office phone number?",
      name: "officeNum",
    }
  ])
  .then((answers) => {
    console.log('creating manager');
    const manager = new Manager(...answers);
    teamMembers.push(manager);
    idArray.push(answers.id);
    console.table(teamMembers);
}).catch((err) => console.error(err));
}
 
function createEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is your Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your engineer's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your GitHub URL?",
        name: "gitHub",
        }
        ]).then((answers) => {
            console.log('creating engineer')
        })
}

function createIntern() {
    inquirer.prompt([{
        type: "input",
        message: "What is your intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your intern's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school does your intern attend?",
        name: "school",
        }
        ]).then((answers) => {
            console.log('creating engineer')
        })
}


function mainPrompt() {
    inquirer.prompt([
      {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "choice",
        choices: ["Engineer", "Intern", "none"],
      }  
    ]).then(({choice}) => {
        console.log(choice);
        switch (choice) {
            case "Engineer":
                createEngineer();
                console.log('creating New Engineer');
                break;
            case "Intern":
                createIntern();
                console.log('creating Intern');
                break;
            default:
                console.log('none selected')
        }
    })
}

//how do I add the option to add an Eng/Intern? A separate .prompt?
// {
//     type: "list",
//     message: "What is the employee's role?",
//     name: "role",
//     choices: ["Engineer", "Intern"],
//   },
// {
//   type: "input",
//   message: "What is the employee name?",
//   name: "name",
// },
//   //for Engineer only
//  
// //for Intern only
// {
//   type: "input",
//   message: "What school is the intern attending?",
//   name: "school",
// },

//function to write HTML file
function writeToFile(fileName, data) {
  var htmlString = generateHTML(data);
  fs.writeFile(fileName, htmlString, (err) => {
    return err
      ? console.log(err)
      : console.log("Directory was sucessfully created.");
  });
}



//initialize application update createManager later 
// fix to run create manager first, then run main prompt and create the file
function init() {
  createManager().then(() => {
  mainPrompt().then((answers) => writeToFile("./dist/list.HTML", answers));
  } )
}

init();
