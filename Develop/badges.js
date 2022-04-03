//look into .when method

const fs = require('fs');
const inquirer = require('inquirer');

const badgesQs = function () {
  inquirer.prompt(
  [
    {
      type: 'confirm',
      name: 'badgesQ',
      message: 'Would you like this badge to be dynamic?',
    }
  ])
};

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

function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    
    if (answers.badges) {

      questions.prompt.next(badgesQs)
      .then(answers => {
        if (answers.badgesQ){
          inquirer.prompt(dynamicQs)
          .then(answers => {
            console.log(answers);
          })
        } else {
          inquirer.prompt(staticQs)
          .then(answers => {
            console.log(answers);
          })
        };
      });
    } else {
      console.log(answers);
    };
  })
};