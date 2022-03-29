/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
{quote: `I think you should experience it. You always say you want to experience things but I don't think you actually want to experience things because you would experience it if you wanted to experience things.`, 
source: `Kendall Jenner`},
{quote: `Every night. No sleep! Bus, club, 'nother club, 'nohter club, plane, next place.`,
source: `Lady GaGa`},
{quote: `Sam, the first night at BED when you left Ron made out with two girls..`,
source: `Snooki and Jwow`},
{quote: `Are you new here?`,
year: `TikTok 2021`},
{quote: `I don't have a sugar daddy, I've never had a sugar daddy, if I wanted a sugar daddy, yes, I probably could go out and get one because I am what? Sickening. You could never have a sugar daddy because you.are.not.that.kind.of.girl. Baby everything I have I have worked for and I have got myself. I've built myself from the ground up... `,
citation: `Shangela RuPauls Drag Race season 3`}
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
let randomnumber = Math.floor( Math.random() * quotes.length);
let randomquote = quotes[randomnumber];
return randomquote;
};
// console.log(getRandomQuote()); for testing

/***
 * `printQuote` function
***/

function printQuote (){
// recall prior funciton
let fullquote = getRandomQuote ();
let html = `<p class = "quote">` + fullquote.quote + `</p>` + `<p class = "source">` + fullquote.source;
// first if statement 
if (fullquote.citation) {
  html = `<p class="quote">` + fullquote.quote + `</p>` + `<span class="citation">` + fullquote.citation + `</span>`;
};
// second if statement
if (fullquote.year){
  html = `<p class="quote">` + fullquote.quote + `</p>` + `<span class="year">` + fullquote.year + `</span>`;
};

// added closing </p>
html += "</p>";
// return with added string
return document.getElementById('quote-box').innerHTML = html;
}
// console.log(getRandomQuote()); for testing


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);