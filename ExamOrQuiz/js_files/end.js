const username = document.getElementById("username");
const saveScorebtn = document.getElementById("saveScorebtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const scoreList = JSON.parse(localStorage.getItem("highScores"));
console.log(scoreList);

const maxScore = 10;
finalScore.innerText = mostRecentScore;

//disable save button if there's no username
username.addEventListener("keyup", () => {
  saveScorebtn.disabled = !username.value;
});

//saving score to the array
saveScore = (e) => {
  //console.log("click!!!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100), //mostRecentScore
    name: username.value,
  };
  //push the array high score
  scoreList.push(score);
  scoreLists.sort((a, b) => b.score - a.score);

  //stringyfy to hson to be saved as stings
  localStorage.setItem("highScores", JSON.stringify(scoreList));

  console.log(scoreList);
};
