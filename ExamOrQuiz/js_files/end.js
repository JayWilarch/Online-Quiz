const username = localStorage.getItem("recentName");
const saveScorebtn = document.getElementById("saveScorebtn");

const mostRecentScoreMC = localStorage.getItem("mostRecentScoreMC");
const mostRecentScore = localStorage.getItem("mostRecentScore");
console.log(mostRecentScore);
console.log(mostRecentScoreMC);
const finalScore = document.getElementById("finalScore");
// || [] to output empty storage and not null
const scoreList = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(scoreList);

const maxScore = 10;
const totalScore = Number(mostRecentScoreMC) + Number(mostRecentScore);
finalScore.innerText = totalScore;

//disable save button if there's no username
//username.addEventListener("keyup", () => {
//saveScorebtn.disabled = !username.value;
//});

//saving score to the array
saveScore = (e) => {
  //console.log("click!!!");
  e.preventDefault();

  //score to json storage
  const score = {
    score: totalScore,
    name: username,
  };
  //arrange the she scrore
  scoreList.push(score);
  scoreList.sort((a, b) => b.score - a.score);

  //stringyfy to hson to be saved as stings
  localStorage.setItem("highScores", JSON.stringify(scoreList));

  //console.log(scoreList);
  //the user will redirect to the score board
  return window.location.assign("/../game/scores.html");
};
