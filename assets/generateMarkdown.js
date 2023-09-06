// a function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `${renderLicenseLink} ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg) | [![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
};

// Creating a function that returns the license link
const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `* [License](#license)`;
  }
  return '';
};

// Creating a function that returns the license section of README
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';
};

// Creating a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

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

${renderLicenseSection(data.license)}

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
