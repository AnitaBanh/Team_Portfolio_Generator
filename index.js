const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager name?",
      name: "manager",
    },
    {
      type: "input",
      message: "What is your employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office phone number?",
      name: "phone",
    },
    //how do I add the option to add an Eng/Intern? A separate .prompt? 

    {
      type: "input",
      message: "What is the employee name?",
      name: "name",
    },
      //for Engineer only
      {
        type: "input",
        message: "What is your GitHub URL?",
        name: "GitHub",
      },
    //for Intern only
    {
      type: "input",
      message: "What school is the intern attending?",
      name: "school",
    },
  ])
  

//function to write HTML file
function writeToFile(fileName, data) {
    var htmlString = generateHTML(data);
    fs.writeFile(fileName, htmlString, (err) => {
     return err ? console.log(err) : console.log("Directory was sucessfully created.");
    });    
}

//initialize application
function init() {
  questions().then((answers) => writeToFile("./dist/list.HTML", answers));}

  init();