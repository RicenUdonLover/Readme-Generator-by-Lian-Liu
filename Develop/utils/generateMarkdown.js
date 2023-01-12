// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  // Use a swtich to handle the three common license types.
  switch (license.trim()) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      badge = '';
  }
  return badge;
}

//This returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // Use a swtich to handle the three common license types.
  switch (license.trim()) { 
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://www.apache.org/licenses/';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
};


// This returns the license section of README using the info created by previous helper functions
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license) //Creates the badge used in the template literals below
  let licenseLink = renderLicenseLink(license); //Creates the link used in the template literals below
  // It will only create the license section if both badge and link are available.
  if (licenseLink !== "" && licenseBadge) {
    return `
## License 

This project is licensed under ${licenseBadge}. See the [LICENSE](${licenseLink}) file for details.`;
  } else {
    return '';
  }
}

// This is the function to generate markdown for README
export function generateMarkdown(answers) {
  const licenseSection = renderLicenseSection(answers.license)
  const readme =
    `
# ${answers.title.trim()}

## Description

${answers.description.trim()}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation.trim()}

## Usage

${answers.usage.trim()}

${licenseSection}

## Contributing

${answers.contributing.trim()}

## Tests

${answers.tests.trim()}

## Questions

For any questions, please contact me at [${answers.email.trim()}](mailto:${answers.email.trim()}). You can also check out my GitHub profile at [https://github.com/${answers.github.trim()}](https://github.com/${answers.github.trim()}).
`
  return readme
};


