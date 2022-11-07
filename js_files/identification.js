//Ralph
const questionCounterText = document.getElementById("questionCounter");
const question = document.getElementById("question");
const idenAnswer = document.getElementById("idenAnswer");
const submitAnsBtn = document.getElementById("submitAnsBtn");
//choice 1-2
//const choices = Array.from(document.getElementsByClassName("choice-text"));
//const scoreText = document.getElementById("score");

let currentQuestion = {};
let accoptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//fetch questions from the json file using fetch API
let questions = [];

fetch("/../questions.json")
  .then((res) => {
    return res.json();
  })
  // call the questions before trigerring start_game()
  .then((loadedQuestions) => {
    //console.log(loadedQuestions);
    //multiple choice
    questions = loadedQuestions.Identification;
    start_game();
  });

idenAnswer.addEventListener("keyup", () => {
  submitAnsBtn.disabled = !idenAnswer.value;
});

const correct_bonus = 1;
const max_question = 10;
// start function
start_game = () => {
  questionCounter = 0;
  score = 0;
  //... is a spread operator for the question to get all the questions from
  availableQuestions = [...questions];
  //console.log(availableQuestions);
  get_new_question(0);
};

// get new question from questionaire
function get_new_question(index) {
  //get question
  questionCounterText.innerText = que_count + "/" + max_question;
  currentQuestion = availableQuestions[index];
  question.innerText = currentQuestion.question;
  //get choices
  //choices.forEach((choice) => {
  //const number = choice.dataset["number"];
  //choice.innerText = currentQuestion["choice" + number];
  //});
  //When loaded accepting question is true
  accoptingAnswers = true;
}

saveAnswer = (e) => {
  //console.log("Click!!!");
  e.preventDefault();
  //console.log(currentQuestion.answer);
  //get input value fromt the user
  localStorage.setItem("IdentificationAns", idenAnswer.value);
  UserAns = localStorage.getItem("IdentificationAns");
  //console.log(UserAns);

  if (!accoptingAnswers) return;

  accoptingAnswers = false;

  const classToApply =
    // toLowercase to Ignore Case from the user input and answer
    UserAns.toLowerCase() === currentQuestion.answer.toLowerCase()
      ? "correct"
      : "incorrect";
  //console.log(classToApply);
  // if the anwer is correct increment score
  if (classToApply == "correct") {
    incrementScore(correct_bonus);
  }

  if (que_count < questions.length - 1) {
    que_count++;
    get_new_question(que_count);
  } else {
    //console.log("Complete!");
    return window.location.assign("/../game/end.html");
  }
};

let que_count = 1;

//for showing the score at the upper right
incrementScore = (num) => {
  ``;
  score += num;
  //scoreText.innerText = score;
  localStorage.setItem("mostRecentScoreIden", score);
};
