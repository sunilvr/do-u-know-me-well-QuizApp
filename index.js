var readlineSync = require('readline-sync');
var quizScore = 0;
var userAnswer, userName;

var questionsList = [{
  "question": "Where do I live? : ",
  "answer": "bangalore"
},
{
  "question": "Where was I born? : ",
  "answer": "kolar"
},
{
  "question": "Where do I work? : ",
  "answer": "bangalore"
},
{
  "question": "What is my favourite sport? : ",
  "answer": "Cricket"
},
{
  "question": "Who is my favourite batsman? : ",
  "answer": "gautam gambhir"
},
{
  "question": "Who is my favourite bowler ? : ",
  "answer": "anil kumble"
},
{
  "question": "Which is my favourite color? : ",
  "answer": "black"
},
{
  "question": "Which is my favourite holiday destination? : ",
  "answer": "greece"
}];

var highScores = [{
  "name":"Sunil",
  "score": 8
},
{
  "name":"Srikanth",
  "score": 7
}]

function greetUser(){
  userName = readlineSync.question('May I know your name: ');
  var welcomeMessage = 'Welcome ' + userName.toUpperCase() + '. The quiz shall begin now, fasten your seat belts!!\n\n';
  console.log(welcomeMessage);
}

function askQuestion(question, answer){
  userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    quizScore += 1;
    console.log('The answer is correct');
  } else {
    console.log('You were wrong');
  }
  console.log('Your score : ' + quizScore);
  console.log('----------------------------------\n');
}

function displayHighScores(){
  console.log('\n\nFind the previous highscores in this game. Ping me if you are there. I shall update it!');
  for (var i = 0; i < highScores.length; i++){
      console.log(highScores[i].name + ' : ' + highScores[i].score);
    }
  }

function playQuiz(){
  for (var i = 0; i < questionsList.length; i++){
      askQuestion(questionsList[i].question, questionsList[i].answer);
  }
  console.log('\nThe quiz has ended now. That was a great game ' + userName.toUpperCase() + '!!');
  console.log('You have managed to successfully answer ' +  quizScore + ' out of ' + questionsList.length + ' questions right');

  displayHighScores();
}

greetUser();
playQuiz();