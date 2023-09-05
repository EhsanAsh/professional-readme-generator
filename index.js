const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown.js");
const colors = require("colors");

console.log(`Hi, this application is created to generate a professional README for your projects.
You will be asked to answer some questions and enter som information to create your README file as you are expecting`.rainbow);

// array of questions for user
const questions = [

  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (value) => value ? true : "Please enter a valid title for your project",
  }

];

inquirer
  
  .prompt(questions)

  .then(answers => {
    console.log(answers);
    const readmecontent = generateMarkdown(answers);
    fs.writeFile("./assets/README.md", readmecontent, (err) => {
      err ? console.log(err) : console.log("README file created successfully");
    })
      
  .catch(err => console.log("An Error occured:", err));
    
  });


// TODO: Create a function to write README file

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
