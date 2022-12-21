// TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// const renderLicenseBadge = require('./utils/generateMarkdown.js');
// const renderLicenseLink = require('./utils/generateMarkdown.js');
// const renderLicenseSection = require('./utils/generateMarkdown.js');
// const generateMarkdown = require('./utils/generateMarkdown.js');
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title of your project?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: [
      'MIT',
      'Apache 2.0',
      'GPL 3.0',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:'
  }
];



// TODO: Create a function to write README file
function writeToFile(readme) {
  fs.writeFileSync(`README.md`, readme);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const readme = generateMarkdown(answers);
      writeToFile(readme)
      console.log('Successfully created README file!')
    })
    .catch(err => {
      console.error(`Error creating README file: ${err}`);
    });
};


// Function call to initialize app
init();
