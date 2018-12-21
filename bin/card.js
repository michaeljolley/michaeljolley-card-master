#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

const newline = "\n";

const banner = `
                                       '.-://:--..''                                                
                                .:+ooooo+/:::://///++++//:'                                         
                            ./+o/:......................-:+o+:                                      
                          :o+-............................-::+yo-                                   
                       '/o:.................................-::/os+.                                
                      /o:....................................-::::/ss:'                             
                    .o:........................................-:::::+y/                            
                   /s-..........................................-::::::yy.                          
                 'oo.............................................-::::::sd+                         
                'so...............................................-::::::ody'                       
               'so-...............................................-:::::::+hy                       
               oo-.................................................:::::::/+d+                      
              -y:..................................................::::::::+om-                     
              y/-..................................................::::::::/+yy                     
             :y:-.................................................-:::::::::+om.                    
             y+:-..................................--::/+++ooso+:---::::::::++sy                    
            'N::-..............................-:+sssyhhhhhhhysso/-.-:::::::+++y-.-.                
            'N/::-.............................:yhyhhdhso/:-.........-::::::++++s::s/               
             do:::........-----:://:-.........../o+/:-................-::::::/+so//.d'              
             /d::::-.-:+syyhhddhdhhho.............---://oo+sso//-......-::::::syhs+-d.              
              y/:::/oyhhhhyysssoooo/-...........--.:+o-:mmsdmy.-/-......-:::::+hhd//d.              
              .+::/o+/:-...........--:/+-......:-.-://..//::-............-:::::dym+yho              
               -::-........-/+osyo/o+--/y......:-....---------...........-::::-dhmo:hm'             
               .::-.....-+++mNhhh/.--..-N-................................::::-dyms-od:             
               .o::....:::-.:-..-:::-..-d.................................:::::dhhh::o:             
               'h::..........--:-......:-.................................:::::dydm/:+'             
               'm::....................-..........-...:+-................-:::::mydmo/oo             
               -d+:...................o-..........-....:m:--............-:::::/myddh+ss             
               -hh:...............-::.//.........:ooo-./h:...----.......::::+shhhhdm//              
               .hN:.............--.h-.:++:....-+yyo+//+o+::::-...--...-/+oyhysyshhdm:               
                dms-...........--..+h/oooyhhsyhyyhhhhhhhyhdddddhs:--.+yyyssssssyyddmo               
                hhd::-.......---....:/+syhhhhyyhhyyyshshssyhhhdddm-./hsssssysyyhyhdmy               
                sym+:::--...-:....:+shddhyyyhyyhsysyyysysssyssyhhm-.oyssssyyhsdydhddm.:             
                +hyy::::::-.--./shddddyyysssysshssssyssyyhysyssshs:oysssysyyhyhdhdddN/:'            
                .dyssoo++:-..-.mhdhhyhsssssssyyyyyyhddhys/--:sysyossssyshyshydydhdddN//.            
                 dhssssyyyo-...mydyhyysyhhhhhhhyyso+/:-......+dyssssysyyydsyhddydhddN:+'            
                 +dhshysssyy/..+hhyys+--::::-----:/o+-.....+yyysssysyhsdshhsdhdhhdddN:+'            
                 'dhydyyssssh+../yyss+..---/syyhhdddyy+:/+shsssssyshsdyhhydhydddddddd:/             
                  odhdydysyssh++osssyo-:-.:yyhhyhhhhddysssssssssshyhyhdydhhdyddddddmh:/             
                  'dddhdyyhsysyssssssdyyh-+yhyhyyyyhyssssssssysssydydydhhdhddhdddddmo--'            
                   +mdddyhhsdsyysysssssshyysssssssssssssssssyhhshsdhhhddhddddhddddmy'               
                   'mdddhdhydshyyysssssysssssssssssssssyyyyyyhdhhhydhdhdddddddddddo'                
                    +mddddhhdsdyhyysyyshyyysyssysssysyshhhyhyyddmdyddddddddddddmy-                  
                    'ymdddhhdydydyysmyyyhyhshyyyyyyyyyhsdhyydsydNhdhddddddddddy:                    
                     'smdddddhdhdyyhmhsydydydydydsdsdyhhydh/ydodmydhdddddddds-                      
                       /dddddddddhydNh+hyhdhdyhydyhhhdhdsydy+dmdhddddddddy/'                        
                        '+dmddddddhddmsdoyddyhohhdhhhddddsmdmyhdhdddddy/.                           
                          '/ydmdddddydhmdhmmydyymmmdmmmddhshddhddddy/.                              
                             ':ohmmmddyhyyhhhdhhmhhdyhdhddhddddyo:'                                 
                                  -/oyhdmdddddhdddmmmdhyyso/:.                                      
                                        ''...'''..''                                                

`;

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.white( "Michael Jolley" ),
	handle: chalk.cyan( "michaeljolley" ),
	work: chalk.hex("#61C7D5")( "Bald. Bearded. Builder." ),
	twitter: chalk.cyan( "https://twitter.com/michaeljolley" ),
	github: chalk.cyan( "https://github.com/michaeljolley" ),
	twitch: chalk.cyan( "https://twitch.tv/themikejolley" ),
	web: chalk.cyan( "https://michaeljolley.com" ),
	npx: chalk.white( "npx michaeljolley" ),
	labelTwitter: chalk.hex("#1DA1F2").bold( "   Twitter:" ),
	labelGitHub: chalk.hex("#D7DCE3").bold( "    GitHub:" ),
	labelTwitch: chalk.hex("#6441A4").bold( "    Twitch:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" )
};

// Actual strings we're going to output
const heading = `                               ${ data.name }`;
const working = `\n                               ${ data.work }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }`;
const githubing = `${ data.labelGitHub }  ${ data.github }`;
const twitching = `${ data.labelTwitch }  ${ data.twitch }`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;

const set1 = [banner, heading, working];
const set2 = [twittering + `              ` + twitching];
const set3 = [githubing + `              ` + webing];

const card = [
	set1, set2, set3, carding
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console