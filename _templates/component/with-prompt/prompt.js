// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'atomic',
    message:
      'What type of component? (atom, molecule, organism, template, page)',
  },
  {
    type: 'input',
    name: 'name',
    message: "What's the name of your component?",
  },
  {
    type: 'toggle',
    name: 'cypress',
    message: 'Include a cypress component test?',
  },
];
