const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//create team function Which type of team member would you like to add?
const teamMembers = [];
const idArray = [];

// wraps the entire including html function  --- function menu() {}
// call function menu ();
function menu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the team manager's name?",
          name: "mgrName",
        },
        {
          type: "input",
          message: "What is the manager's employee ID?",
          name: "mgrId",
        },
        {
          type: "input",
          message: "What is the manager's email address?",
          name: "mgrEmail",
        },
        {
          type: "input",
          message: "What is the manager's office phone number?",
          name: "officeNum",
        },
      ])
      .then((answers) => {
        console.log("creating manager");
        const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.officeNum);
        teamMembers.push(manager);
        idArray.push(answers.mgrId);
        console.table(teamMembers);
        mainPrompt();
      })
      .catch((err) => console.error(err));
  }
  function mainPrompt() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add?",
          name: "choice",
          choices: ["Engineer", "Intern", "None"],
        },
      ])
      .then((choice) => {
        console.log(choice);
        switch (choice.choice) {
          case "Engineer":
            createEngineer();
            console.log("creating New Engineer");
            break;
          case "Intern":
            createIntern();
            console.log("creating Intern");
            break;
          default:
            init();
            console.log("none selected");
        }
      });
  }

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engrName",
        },
        {
          type: "input",
          message: "What is the engineer's employee id?",
          name: "engrId",
        },
        {
          type: "input",
          message: "What is the engineer's email?",
          name: "engrEmail",
        },
        {
          type: "input",
          message: "What is the engineer's GitHub username?",
          name: "gitHub",
        },
      ])
      .then((answers) => {
        console.log("creating engineer");
        const engineer = new Engineer(answers.engrName, answers.engrId, answers.engrEmail, answers.gitHub);
        teamMembers.push(engineer);
        idArray.push(answers.engrId);
        console.table(teamMembers);
        mainPrompt();
      })
      .catch((err) => console.error(err));
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is your intern's id?",
          name: "internId",
        },
        {
          type: "input",
          message: "What is your intern's email?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What school does your intern attend?",
          name: "school",
        },
      ])
      .then((answers) => {
        console.log("creating intern");
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        console.table(teamMembers);
        mainPrompt();
      })
      .catch((err) => console.error(err));
  }

  //function to write HTML file
  function writeToFile(fileName, data) {
    var htmlString = generateHTML(data);
    fs.writeFile(fileName, htmlString, (err) => {
      return err
        ? console.log(err)
        : console.log("Directory was sucessfully created.");
    });
  }

  
  // run create manager first, then run main prompt and create the HTML file
  function init() {
    createManager().then(() => {
      mainPrompt().then((data) => {
        writeToFile("list.HTML", data);
      });
    });
  }
  createManager();
}

menu();
