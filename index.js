const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message:'Enter a title for your README file',
        name: 'title'
    },
    {
        type: 'input',
        message:'Tell me about what you have worked on',
        name: 'description'
    },
    {
        type: 'input',
        message:'How did you install the application?',
        name: 'installation'
    },
    {
        type: 'input',
        message:'How do you use the application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ["MIT","IBM","ISC"]
    },
    {
        type: 'input',
        message:'Who contributed in the making of this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message:'Can we test it?',
        name: 'tests'
    },
    {
        type: 'input',
        message:'Do you have any question?',
        name: 'question'
    },
    {
        type: 'input',
        message:'Please, Enter your GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message:'Please, Enter your linkedIn username',
        name: 'linkedin'
    },
  
    ]).then(answers => {
        let stringForNewDocument = generateMarkdown(answers)
        fs.writeFile("TEST.md", stringForNewDocument, (err) => {
            if(err) throw err;
        } )
    })