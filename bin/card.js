#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk, { backgroundColorNames } from "chalk";
import boxen from "boxen";
import gradient from "gradient-string";

const newline = "\n";

// Text + chalk definitions
const data = {
  name: chalk.white.bold("Michael Jolley"),
  tagline1: chalk.white("Bringing smiles to the syntax —"),
  tagline2: chalk.white("because laughter is the best error handler."),
  work: gradient("#ff00ff", "#00ffff")("bald bearded builder"),
  github: chalk.white("https://github.com/michaeljolley"),
  youtube: chalk.white("https://youtube.com/c/baldbeardedbuilder"),
  web: chalk.white("https://baldbeardedbuilder.com"),
  linkedin: chalk.white("https://linkedin.com/in/michaelwjolley"),
  npx: chalk.white("npx michaeljolley"),
  labelGitHub: chalk.hex("#666666").bold("GitHub:"),
  labelYouTube: chalk.hex("#FF0000").bold("YouTube:"),
  labelLinkedIn: chalk.hex("#0A66C2").bold("LinkedIn:"),
  labelWeb: chalk.hex("#5DE4C7").bold("Blog:"),
  labelCard: chalk.white.bold("Card:")
};

// Define options for Boxen
const options = {
  padding: 0,
  margin: 0,
  borderColor: "#7b3cb6",
  borderStyle: "double",
  title: data.name,
  titleAlignment: "center"
};

// Actual strings we're going to output
const lines = [];
lines.push(`                   ${data.work}\n`);
lines.push(`              ${data.tagline1}`);
lines.push(`        ${data.tagline2}\n`);

const contacts = [];

contacts.push(`     ${data.labelYouTube}  ${data.youtube}`);
contacts.push(`      ${data.labelGitHub}  ${data.github}`);
contacts.push(`    ${data.labelLinkedIn}  ${data.linkedin}`);
contacts.push(`        ${data.labelWeb}  ${data.web}`);

const contactsBox = boxen(contacts.join(newline), { 
    backgroundColor: "#333333", 
    padding: 1, 
    margin: 0, 
    borderStyle: "none" });

lines.push(contactsBox);

// Put all our output together into a single variable so we can use boxen effectively
const output = lines.join(newline);

console.log(chalk.green(boxen(output, options))); // eslint-disable-line no-console
