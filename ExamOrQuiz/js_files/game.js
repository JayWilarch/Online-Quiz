const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let accoptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//somple questions
let questions = [
  {
    question: "What is this?",
    choice1: "What",
    choice2: "Is",
    choice3: "This",
    choice4: "?",
    answer: 1,
  },
  {
    question: "Who am I?",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
  {
    question: "Who?",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
  {
    question: "am?",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
  {
    question: " I?",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
];

const correct_bonus = 10;
const max_question = 10;
// start function
start_game = () => {
  questionCounter = 0;
  score = 0;
  //... is a spread operator for the question to get all the questions from
  availableQuestions = [...questions];
  console.log(availableQuestions);
  get_new_question(0);
};

// get new question from questionaire randomly
function get_new_question(index) {
  if (availableQuestions.length === 0 || questionCounter >= max_question) {
  }
  //get question
  questionCounter++;
  currentQuestion = availableQuestions[index];
  question.innerText = currentQuestion.question;
  //get choices
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  //When loaded accepting question is true
  accoptingAnswers = true;
}

let que_count = 0;
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!accoptingAnswers) return;

    accoptingAnswers = false;
    const selected_choice = e.target;
    const selected_answer = selected_choice.dataset["number"];
    console.log(selected_answer);
    if (que_count < questions.length - 1) {
      que_count++;
      get_new_question(que_count);
    } else {
      console.log("Complete!");
      return window.location.assign("/othertypeofquestions.html");
    }
  });
});

start_game();
