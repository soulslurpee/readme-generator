// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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
    validate: (answer) => {
      if (answer) {
        inquirer.prompt(badgeQs);
      }
      return false;
    } 
  }
];

const badgeQs = [
  {
    type: 'confirm',
    name: 'badgesQ',
    message: 'Would you like this badge to be dynamic?',
    validate: (answer) => {
      if (answer) {
        inquirer.prompt(dyamicQs);
      } else {
        inquirer.prompt(staticQs);
      };     
    }
  }
];

const dyamicQs = [
  {
    type: 'input',
    name: 'label',
    message: 'Please enter the label you would like for this badge',
    default: 'Go to: https://shields.io/ for the full list of options',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a label for this badge'
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'dataURL',
    message: 'Please enter the data URL for this badge',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a URL for this badge'
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'query',
    message: 'Please enter a query for this badge',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a query for this badge'
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'color',
    message: 'Please select a color for this badge',
    default: 'brightgreen',
    choices: [
      'brightgreen','green','yellowgreen','yellow','orange','red','blue','lightgrey','success','important','critical','informational','inactive','blueviolet'
    ],
  },
  {
    type: 'input',
    name: 'prefix',
    message: 'Please enter the prefix for your badge',
    default: 'Go to: https://shields.io/ for the full list of options',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a prefix for this badge'
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'sufffix',
    message: 'Please enter the suffix for your badge',
    default: 'Go to: https://shields.io/ for the full list of options',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a suffix for this badge'
      }
      return true;
    }
  },
];

const staticQs = [
  {
    type: 'input',
    name: 'label',
    message: 'Please enter the label you would like for this badge',
    default: 'Go to: https://shields.io/ for the full list of options',
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a label for this badge'
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'message',
    message: 'Please enter the message you would like for this badge',
    default: 'Go to: https://shields.io/ for the full list of options',
    choices: [],
    validate: (answer) => {
      if (answer == '') {
        return 'Please enter a message for this badge'
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'color',
    message: 'Please select a color for this badge',
    default: 'brightgreen',
    choices: [
      'brightgreen','green','yellowgreen','yellow','orange','red','blue','lightgrey','success','important','critical','informational','inactive','blueviolet'
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

