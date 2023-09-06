// a function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `This project is licensed under the ${license} license.
    ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg) | [![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

## License
${renderLicenseBadge(data.license)}

## Description
> ${data.description}

---

## installation
${data.installation}

---

## Usage
> ${data.usage}

---

## Credits
${data.credits}

---

## Features
${data.features}

---

## Contributing
${data.contributing}

---

## Test
${data.test}

`;
}

module.exports = generateMarkdown;
