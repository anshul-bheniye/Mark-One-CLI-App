
//  Importing Packages 
var readlineSync = require("readline-sync");
;

// declaring variable
var score = 0; 

//input from user
var userName = readlineSync.question("What is your name?  ");
console.log("Welcome " + userName + " to DO YOU KNOW Anshul?");

// list of questions in array  
var questions = 
[
 {
   question : "1] What is my favorite ice-cream flavour? ",
   answer : "American Nut",
 }, 
 {
   question : "2] Which is my favorite river? ",
   answer :"Narmada",
 },
 {
   question : "3] Who is my favorite superhero? ",
   answer :"Phantom",
 },
 {
   question : "4] Which is my favorite color? ",
   answer :"Blue",
 }
];

//declaring function  
function play(question,answer)
{
 var answerKeeper = readlineSync.question(question);
 if (answerKeeper.toUpperCase() === answer.toUpperCase())
 {
   console.log("Your answer is correct ");
   score = score + 1;
 }
 else
 {
   console.log("Uh-No your answer is wrong  ");
   score = score - 1;
 }
 console.log("Your current score is: " , score);
}

//using for loop to index through question
for ( i = 0; i < questions.length; i++ )
{
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer)
}

// declaring the highscores array
var hScores = 
[
 {
   name : "Anshul",
   score : "4",
 }, 
 {
   name : "Ashwini",
   score :"2",
 }
]

console.log("---------------------------");

console.log("Below are our HighScorers ");

//displaying the leaderboard

for( var k = 0; k < hScores.length; k++ ){

  var currUser = hScores[k];

  console.log("Name: " + currUser.name + " score: "+ currUser.score);

}

console.log("---------------------------");

console.log( "Please send me the screenshot of your score if you have beaten the highscore !!" );
 