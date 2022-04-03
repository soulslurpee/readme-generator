// TODO: Include packages needed for this application - DONE
const fs = require('fs');
const inquirer = require('inquirer');
const readmeGenerator = require('./utils/readmeGenerator.js')



// TODO: Create an array of questions for user input - DONE
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Simply the Best',
    validate: (answer) => {
      if (answer == ''){
        return 'Please enter your name';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    default: 'coder4lyfe',
    validate: (answer) => {
      if (answer == ''){
        return 'Please enter your GitHub username';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    default: 'something@somewhere.yay',
    validate: (answer) => {

      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)

      if (answer == ''){
        return 'Please enter your email address';
      }
      if (!valid) {
      return 'Please enter a valid email address';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    default: 'Facebook but Good',
    validate: (answer) => {
      if (answer == ''){
        return 'Please enter your project title';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
    default: 'Just the description. Installaion, usage, contribution rules, and tests come later',
    validate: (answer) => {
      if (answer == ''){
        return 'Please enter your project description';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please enter your installation instructions',
    default: 'To skip, delete this default text and press Enter',
    validate: (answer) => {
      if (answer == ''){
        console.log('No installation instructions included');
        return true;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use of the project',
    default: 'To skip, delete this default text and press Enter',
    validate: (answer) => {
      if (answer == ''){
        console.log('No usage instructions included');
        return true;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please provide contribution guidelines for this project',
    default: 'To skip, delete this default text and press Enter',
    validate: (answer) => {
      if (answer == ''){
        console.log('No contribution guidelines included');
        return true;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide any tests written for this project',
    default: 'To skip, delete this default text and press Enter',
    validate: (answer) => {
      if (answer == ''){
        console.log('No test cases included');
        return true;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter any applicable licensing for this project',
    default: 'ISC / MIT / GNU GPLv3',
    validate: (answer) => {
      if (answer == ''){
        console.log('No licensing included');
        return true;
      }
      return true;
    }
  },

  {
    type: 'confirm',
    name: 'badges',
    message: 'Would you like to add a Shields.io badge to this project?',
  }
];

// TODO: Create a function to write README file
const readmeCreate = (readmeContent) => {
  fs.writefile("../YourNewReadme.md", readmeContent, err => {
    if (err) throw err;
    return 'File Created!'
  })
};

// TODO: Create a function to initialize app

init = () => {
  inquirer
    .prompt(questions)
    .then(response => {
      console.log(response);
    })

  var readmeContent = readmeGenerator(response);

  readmeCreate(readmeContent);

};

// Function call to initialize app
init();