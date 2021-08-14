onst chalk = require('chalk');
var readlineSync = require('readline-sync');

 var score = 0;

// data of high score
var highScores = [
  {
    name: "Neha",
    score: 3,
  },

  {
    name: "Abhay",
    score: 2,
  },
]

// array of objects
var questions = [
  {
 question: "Which of the following is a primary color.\n"+chalk.magentaBright("Pink\n")+chalk.green("Green\n")+chalk.red("Red\n"),
  answer: "Red",
}, 

{
 question: "Which of the following is  a secondary color\n"+chalk.magentaBright("Pink\n")+chalk.green("Green\n")+chalk.yellow("Yellow\n"),
 answer: "Green",
},

{
  question: "What does "+ chalk.red("red ")+"and "+chalk.yellow("yellow ")+ "gives you? \n "+chalk.magentaBright("Pink\n")+chalk.rgb(255, 136, 0)("Orange\n")+chalk.yellow("Yellow\n"),
  answer: "Orange",
},

{
  question: "What does "+ chalk.yellow("yellow ")+"and "+chalk.green("blue ")+ "gives you? \n "+chalk.magentaBright("Pink\n")+chalk.green("Green\n")+chalk.yellow("Yellow\n"),
  answer: "Green",
},

{
  question: "What does "+ chalk.red("red ")+"and "+chalk.blue("blue ")+ "gives you? \n "+chalk.magentaBright("Pink\n")+chalk.rgb(152,98,253)("Violet\n")+chalk.yellow("Yellow\n"),
  answer: "Violet",
},


];

function welcome() {
console.log("Welcome to KNOW YOUR COLORS" );
console.log("\n----------------------------------------\n");
console.log(chalk.bold.redBright( "Let's test your Knowledge about colors!"));

var userName=readlineSync.question("What should I call you?");


console.log("Welcome " + userName );
console.log(" Note: Put answers as they are in the option, as they are case sensitive!");
console.log("Here you go!" );
}


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
   quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log(chalk.red("Check out the high scores"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

