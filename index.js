const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown.js");
// Importins colors module to add colors to the console.log
const colors = require("colors");
const folderPath = process.argv[2] || process.cwd() + "/README.md";

console.log(colors.rainbow(
  `Hi, this application is created to generate a professional README for your projects.
  You will be asked to answer some questions and enter information to create your README file as expected.`
));

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
    console.log(colors.cyan("Your answer is: ", answers));
    const readmecontent = generateMarkdown(answers);
    writeToFile(folderPath, readmecontent);
  })
  .catch(err => console.log("An Error occured:", err));

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log(colors.red("README file created successfully"));
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
