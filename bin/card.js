#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

const newline = '\n';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white.bold('Lucas Fraga /'),
  handle: chalk.cyan.bold('@ulucasfraga'),
  work: chalk.cyan('C6 Bank, QA Engineer'),
  nominations: chalk.white(
    [
      'Passionate about Software Quality.',
      '+Infos: https://www.gitshowcase.com/ulucasfraga'
    ].join(newline)
  ),
  medium: chalk.cyan('https://medium.com/@ulucasfraga'),
  twitter: chalk.cyan('https://twitter.com/ulucasfraga'),
  github: chalk.cyan('https://github.com/ulucasfraga'),
  showcase: chalk.cyan('https://www.gitshowcase.com/ulucasfraga'),
  npx: chalk.white('npx ulucasfraga'),
  labelWork: chalk.white.bold('      Work:'),
  labelMedium: chalk.white.bold('      Blog:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelShowCase: chalk.white.bold('  ShowCase:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const header = `${data.name} ${data.handle}`;
const nominations = `${data.nominations}`;
const work = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const showcase = `${data.labelShowCase}  ${data.showcase}`;
const medium = `${data.labelMedium}  ${data.medium}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single constiable so we can use boxen effectively
const output =
  header +
  newline +
  newline +
  nominations +
  newline +
  newline +
  work +
  newline +
  github +
  newline +
  twitter +
  newline +
  medium +
  newline +
  showcase +
  newline +
  newline +
  card;

console.log(chalk.green(boxen(output, options)));
