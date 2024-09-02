#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import gradient from "gradient-string";

const newline = "\n";

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderColor: "#366880",
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white.bold("Michael Jolley"),
  handle: chalk.cyan("michaeljolley"),
  work: gradient("#5DE4C7", "#236092")("bald bearded builder"),
  twitter: chalk.white("https://x.com/michaeljolley"),
  github: chalk.white("https://github.com/michaeljolley"),
  twitch:  chalk.white("https://twitch.tv/baldbeardedbuilder"),
  youtube: chalk.white("https://youtube.com/c/baldbeardedbuilder"),
  web: chalk.white("https://baldbeardedbuilder.com"),
  linkedin: chalk.white("https://linkedin.com/in/michaelwjolley"),
  npx: chalk.white("npx michaeljolley"),
  labelTwitter: chalk.hex("#1DA1F2").bold("Twitter (X):"),
  labelGitHub: chalk.hex("#666666").bold("GitHub:"),
  labelTwitch: chalk.hex("#8A6DC1").bold("Twitch:"),
  labelYouTube: chalk.hex("#FF0000").bold("YouTube:"),
  labelLinkedIn: chalk.hex("#0A66C2").bold("LinkedIn:"),
  labelWeb: chalk.hex("#5DE4C7").bold("Blog:"),
  labelCard: chalk.white.bold("Card:")
};

// Actual strings we're going to output
const lines = [];
lines.push(`                    ${data.name}\n                 ${data.work}\n`);
lines.push(`     ${data.labelYouTube}  ${data.youtube}`);
lines.push(` ${data.labelTwitter}  ${data.twitter}`);
lines.push(`      ${data.labelTwitch}  ${data.twitch}`);
lines.push(`      ${data.labelGitHub}  ${data.github}`);
lines.push(`    ${data.labelLinkedIn}  ${data.linkedin}`);
lines.push(`        ${data.labelWeb}  ${data.web}`);
lines.push(`\n        ${data.labelCard}  ${data.npx}`);

// Put all our output together into a single variable so we can use boxen effectively
const output = lines.join(newline);

console.log(chalk.green(boxen(output, options))); // eslint-disable-line no-console
