var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var score = 0;

console.log("-----------------------------------------")
console.log(`hello there ${userName}. Please answer each and every question and at the end of the quiz you will know that how much you know me.`)
console.log("-----------------------------------------")
console.log("SEND ME THE SCORE THAT YOU HAVE EARNED.")

var questions = [
  {
    question: "What is my age? ",
    answer: "21",
  },{
    question: "Where do i live? ",
    answer: "Ahmedabad",
  },{
    question: "I study at which University? ",
    answer: "Ganpat University",
  },{
    question: "what is my favorite color? ",
    answer: "blue",
  },{
    question: "What do i love to eat? ",
    answer: "pizza",
  },{
    question: "Who is my favorite actress? ",
    answer: "Priyanka Chopra",
  },{
    question: "Do i hate chocolate? ",
    answer: "Yes",
  },{
    question: "Am i crazy? ",
    answer: "Yes",
  },{
    question: "Do I love to go to gym? ",
    answer: "no",
  },{
    question: "Am I running out of questions? ",
    answer: "yes",
  }
]

for(var i = 0;i < questions.length;i++){
  console.log("-----------------------------------------")
  console.log(" ")
  var que = readlineSync.question(questions[i].question);
  if(questions[i].answer.toUpperCase() === que.toUpperCase()){
    console.log(`Great work ${userName}, you have answered correct.`);
    console.log("your current score is : ",score=score+1)
  }
  else{
    console.log("You answered wrong!!!")
  }
}
console.log(" ")
console.log("-----------------------------------------")
console.log(" ")
console.log(`YAY!!!!, you EARNED ${score} points. now send me the final scores.`)
