// INCLUDE PACKAGES NEEDED FOR THIS APPLICATION
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// CREATE AN ARRAY OF PROMPTS FOR USER INPUT 
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name ?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("please enter your name");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "what is your github username ?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("please enter your github username");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "what is your email ?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("please enter your email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
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
            name: "install",
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
            name: "contribution",
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
            name: "test",
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
            choices: [ "Apache License 2.0", "BSD 3-Clause License", "BSD 2-Clause License", "ISC License (ISC)", "The MIT License"]
        },
        {
            type: "input",
            name: "year",
            message: "what is the copyright year ?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("please enter the copyright year");
                    return false;
                }
            }
        }
    ])
}

//FUNCTION TO INITIALIZE APP
function init () {
    questions()
    // CREATE A FUNCTION TO WRITE README FILE
    .then((projectData) => {
        const markdownData = generateMarkdown(projectData);
        fs.writeFile(`./yourGeneratedREADME/${projectData.title}.md`, markdownData, (err) => {
            err ? console.error(err) : console.log('readme created');
        })
    })
}

// FUCNTION CALL TO INITIALIZE APP
init();

