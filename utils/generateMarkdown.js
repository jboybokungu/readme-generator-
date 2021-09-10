// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == "IBM") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else (license == "ISC")
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}


### Description

  ${data.description}

#### Table of Contents
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contribution](#Contribution)
 - [Tests](#Tests)
 - [Questions](#Questions)
 - [Contact](#Contact)

### Installation

  ${data.installation}

### Usage

  ${data.usage}


### License

${licenseSection}


### Contributing 

${data.contribution}


### Tests

${data.tests}

### Questions

${data.question}

### Contact

[GitHub](https://github.com/${data.github})
[LinkedIn](https://www.linkedin.com/in/${data.linkedin}-ab45a619a/)

`;
}

module.exports = generateMarkdown;
