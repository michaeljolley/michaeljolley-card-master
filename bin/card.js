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
  twitter: chalk.white("https://twitter.com/michaeljolley"),
  github: chalk.white("https://github.com/michaeljolley"),
  twitch:  chalk.white("https://twitch.tv/baldbeardedbuilder"),
  youtube: chalk.white("https://youtube.com/c/baldbeardedbuilder"),
  web: chalk.white("https://baldbeardedbuilder.com"),
  npx: chalk.white("npx michaeljolley"),
  labelTwitter: chalk.hex("#1DA1F2").bold(" Twitter:"),
  labelGitHub: chalk.hex("#666666").bold("  GitHub:"),
  labelTwitch: chalk.hex("#8A6DC1").bold("Twitch:"),
  labelYouTube: chalk.hex("#FF0000").bold("YouTube:"),
  labelWeb: chalk.hex("#5DE4C7").bold("Blog:"),
  labelCard: chalk.white.bold("    Card:")
};

// Actual strings we're going to output
const working = `                    ${data.name}\n                 ${data.work}\n`;
const twittering = `    ${data.labelTwitter}  ${data.twitter}`;
const githubing = `    ${data.labelGitHub}  ${data.github}`;
const youtubing = `     ${data.labelYouTube}  ${data.youtube}`;
const twitching = `      ${data.labelTwitch}  ${data.twitch}`;
const webing = `        ${data.labelWeb}  ${data.web}`;
const carding = `\n    ${data.labelCard}  ${data.npx}`;

const set1 = [working];
const set2 = twittering + `\n` + youtubing;
const set3 = twitching + `\n` + githubing + `\n` + webing;

const card = [set1.join(newline), set2, set3, carding];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join(newline);

console.log(chalk.green(boxen(output, options))); // eslint-disable-line no-console
