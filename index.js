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
    writeToFile("./assets/README.md", readmecontent);
  })
  .catch(err => console.log("An Error occured:", err));

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("README file created successfully");
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
