const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown.js");
// Importins colors module to add colors to the console.log
const colors = require("colors");
const folderPath = process.argv[2] || process.cwd() + "/README.md";
// Creating a new instance of the inquirer.ui.BottomBar class
const ui = new inquirer.ui.BottomBar();
ui.log.write(colors.brightGreen.bold("Generating README file..."));

console.log(colors.rainbow(
  `Hi, this application is created to generate a professional README for your projects.
You will be asked to answer some questions and enter information to create your README file as expected.
`
));

// array of questions for user
const questions = [

  {
    type: "input",
    name: "title",
    message: colors.green.bold("What is the title of your project?"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid title for your project"),
  },
  {
    type: "editor",
    name: "description",
    message: colors.green.bold("Please enter a description for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid description for your project"),
    default: colors.yellow.bold("Add your desired description here"),
  },
  {
    type: "editor",
    name: "installation",
    message: colors.green.bold("Please enter the installation instructions for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid installation instructions for your project"),
  },
  {
    type: "editor",
    name: "usage",
    message: colors.green.bold("Please enter the usage information for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid usage information for your project"),
    default: colors.yellow.bold("Provide instructions and examples for use. Include screenshots as needed."),
  },
  {
    type: "input",
    name: "contributing",
    message: colors.green.bold("Please enter the contribution guidelines for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid contribution guidelines for your project"),
  },
  {
    type: "input",
    name: "credits",
    message: colors.green.bold("Please enter the credits for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid credits for your project"),
    default: colors.yellow.bold("List your collaboraters, used technologies, and third-party assets here"),
  },
  {
    type: "input",
    name: "features",
    message: colors.green.bold("Please select the features of your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid features for your project"),
    default: colors.yellow.bold("List your project features here"),
  },
  {
    type: "input",
    name: "test",
    message: colors.green.bold("Please enter the test instructions for your project:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid test instructions for your project"),
  },
  {
    type: "list",
    name: "license",
    message: colors.green.bold("Please select the license for your project:"),
    choices: ["MIT", "Apache", "GPL", "None"],
    default: "MIT",
  },
  {
    type: "input",
    name: "github",
    message: colors.green.bold("Please enter your github username:"),
    validate: (value) => value ? true : colors.red.bold("Please enter a valid github username"),
  }

];

inquirer
  
  .prompt(questions)

  .then(answers => {
    const readmecontent = generateMarkdown(answers);
    writeToFile(folderPath, readmecontent);
  })
  .catch(err => console.log(colors.red.bold("An Error occured:"), err));
  
  // function to write README file
  const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
      err ? console.log(err) : console.log(colors.brightBlue.bold("README file created successfully"));
    });
  };
  
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();