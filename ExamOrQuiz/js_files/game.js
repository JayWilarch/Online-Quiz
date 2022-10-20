const questionCounterText = document.getElementById("questionCounter");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

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
  {
    question: "qwe",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
  {
    question: "qwerty",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 4,
  },
  {
    question: "qwerty123",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 1,
  },
  {
    question: "qwertyui",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 2,
  },
  {
    question: "qwerrtyu1234",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 3,
  },
  {
    question: "qwerqwewqeweu1234",
    choice1: "Who",
    choice2: "Am",
    choice3: "I",
    choice4: "?",
    answer: 3,
  },
];

const correct_bonus = 1;
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

// get new question from questionaire
function get_new_question(index) {
  //get question
  questionCounterText.innerText = que_count + "/" + max_question;
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

let que_count = 1;
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!accoptingAnswers) return;

    accoptingAnswers = false;
    const selected_choice = e.target;
    const selected_answer = selected_choice.dataset["number"];
    //console.log(selected_answer);

    const classToApply =
      selected_answer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply);

    if (classToApply == "correct") {
      incrementScore(correct_bonus);
    }

    if (que_count < questions.length - 1) {
      que_count++;
      get_new_question(que_count);
    } else {
      console.log("Complete!");
      return window.location.assign("/../game/end.html");
    }
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
  localStorage.setItem("mostRecentScore", score);
};

start_game();
