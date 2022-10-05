var readlineSync = require("readline-sync");
var userName = readlineSync.question("what your name? ")

console.log("hello " + userName + " 😍");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);



  if (userAnswer === answer) {
    console.log("you are right ");
    score = score + 1;

  } else {
    console.log(" you are wrong");
    score = score - 1;
  }

  console.log("current score:" + score);
  console.log("__________");

}
var questions = [{
  question: "How many times did india win the cricket worlscup ?            1.one times🤔      2.two times🤔 ",
  answer: "two times"
},
{
  question: "Full form of ODI ?                      1.one day interstate🤔    2.one day international🤔 ",
  answer: "one day international"
},
{
  question: "who is known as the god of cricket ?                1.ms dhoni🤔 2.sachin🤔 ",
  answer: "sachin"
  
},
{
  question: "Who is known is captain cool ?                1.sachin🤔 2.Ms.dhoni🤔 ",
  answer: "Ms.dhoni"
},
{
  question: "full form of ipl ?                1.india private lunch🤔 2.indian permier leauge🤔🤔 ",
  answer: "indian permier leauge"
},
{
  question: "How many overs are played in ipl ?               1.fifty overs🤔 2.twenty overs🤔 ",
  answer: "20"

}]



for (i = 0; i < questions.length; i++) {

  var currentques = questions[i];
  play(currentques.question, currentques.answer)
}

console.log("your score is =", score + "😍")