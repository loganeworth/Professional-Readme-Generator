const inquirer = require('inquirer');
const fs = require('fs')
// const { default: inquirer } = require("inquirer")

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );
console.log('hello world')

let questions = [{
  message: 'what is the name of your project?',
  type: 'input',
  name: 'title'
},
{
  message: 'describe your project',
  type: 'input',
  name: 'description'
},
{
  message: 'describe your installation instructions here',
  type: 'input',
  name: 'install'
},
{
  message: 'describe the usage of your application',
  type: 'input',
  name: 'usage'
},
{
  message: 'explain the contribution guidelines here for other users',
  type: 'input',
  name: 'contribution'
},
{
  message: 'describe test instructions',
  type: 'input',
  name: 'test'
},
{
  message: 'which license would you like to use?',
  type: 'list',
  name: 'license',
  choices: ['MIT', 'GPLv2', 'Apache']
}]


inquirer.prompt(questions).then(function (answers) {
  console.log(answers)
  

let text = `
# ${answers.title}

## Description

${answers.description}

## Installation

${answers.install}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## Tests

${answers.test}

## License

${renderLicense(answers.license)}
`


function renderLicense(licenseData) {
  if (licenseData === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
    MIT license allows users to reuse code for any purpose.
    `
  }
  else if (licenseData === 'GPLv2')
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) <br>
    GNU GPL v2 is a copyleft license.
    `
  else (licenseData === 'Apache')
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    Apache is permissive and allows users to use the software for any purpose.
    `
  
}

  fs.writeFile('message.md', text, 'utf8', (err)=>{
    if(err)
      console.log(error)

  });

})