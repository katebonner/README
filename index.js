// INCLUDE PACKAGES NEEDED FOR THIS APPLICATION
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// CREATE AN ARRAY OF PROMPTS FOR USER INPUT 
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "project-title",
            message: "what is the title of your project ?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('please enter the title of your project.');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "what is the project's description ?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("please enter the project's description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install-instructions",
            message: "what are the installation instructions for this project ?",
            validate: instructionInput => {
                if (instructionInput){
                    return true;
                }
                else {
                    console.log("please enter the installation instructions for this project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "what is the usage information associated with this project ?",
            validate: usageInput => {
                if (usageInput){
                    return true;
                }
                else {
                    console.log("please enter the usage information associated with this project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribution-guidelines",
            message: "what are the contribution guidelines of this project ?",
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                }
                else {
                    console.log("please enter the contribution guidles of this project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test-instructions",
            message: "what are the test instructions for this project ?",
            validate: testInput => {
                if (testInput){
                    return true;
                }
                else {
                    console.log("please enter the test instructions for this project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            choices: [ "Apache License 2.0", 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', "GNU General Public License (GPL)", 'GNU Library or "Lesser" General Public License (LGPL)', "MIT license", "Mozilla Public License 2.0", "Common Development and Distribution License", "Eclipse Public License version 2.0"]
        }
    ])

}

questions()
    .then(generateMarkdown)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();