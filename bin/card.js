#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

const newline = "\n";

const banner = `
███╗   ███╗██╗ ██████╗██╗  ██╗ █████╗ ███████╗██╗     
████╗ ████║██║██╔════╝██║  ██║██╔══██╗██╔════╝██║     
██╔████╔██║██║██║     ███████║███████║█████╗  ██║     
██║╚██╔╝██║██║██║     ██╔══██║██╔══██║██╔══╝  ██║     
██║ ╚═╝ ██║██║╚██████╗██║  ██║██║  ██║███████╗███████╗
╚═╝     ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
                                                      
      ██╗ ██████╗ ██╗     ██╗     ███████╗██╗   ██╗    
      ██║██╔═══██╗██║     ██║     ██╔════╝╚██╗ ██╔╝    
      ██║██║   ██║██║     ██║     █████╗   ╚████╔╝     
 ██   ██║██║   ██║██║     ██║     ██╔══╝    ╚██╔╝      
 ╚█████╔╝╚██████╔╝███████╗███████╗███████╗   ██║       
  ╚════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝       
`;

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round",
	borderColor: "#75A9C4"
};

// Text + chalk definitions
const data = {
	banner: chalk.hex("#75A9C4")(banner), //#20B968
	name: chalk.white( "Michael Jolley" ),
	handle: chalk.cyan( "michaeljolley" ),
	work: chalk.hex("#947E39")("Bald. ") + chalk.hex("#B89C46")("Bearded. ") + chalk.hex("#FAD667")("Builder."),
	twitter: chalk.cyan( "https://twitter.com/michaeljolley" ),
	github: chalk.cyan( "https://github.com/michaeljolley" ),
	twitch: chalk.cyan( "https://twitch.tv/themichaeljolley" ),
	web: chalk.cyan( "https://michaeljolley.com" ),
	npx: chalk.white( "npx michaeljolley" ),
	labelTwitter: chalk.hex("#1DA1F2").bold( " Twitter:" ),
	labelGitHub: chalk.hex("#D7DCE3").bold( "  GitHub:" ),
	labelTwitch: chalk.hex("#8A6DC1").bold( "Twitch:" ),
	labelWeb: chalk.white.bold( "Blog:" ),
	labelCard: chalk.white.bold( "    Card:" )
};

// Actual strings we're going to output
const working = `               ${ data.work }\n`;
const twittering = `    ${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `    ${ data.labelGitHub }  ${ data.github }`;
const twitching = `      ${ data.labelTwitch }  ${ data.twitch }`;
const webing = `        ${ data.labelWeb }  ${ data.web }`;
const carding = `\n    ${ data.labelCard }  ${ data.npx }`;

const set1 = [data.banner, working];
const set2 = twittering + `\n` + githubing;
const set3 = twitching + `\n` + webing;

const card = [
	set1.join(newline), set2, set3, carding
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
