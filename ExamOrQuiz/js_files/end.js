const username = document.getElementById("username");
const saveScorebtn = document.getElementById("saveScorebtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScorebtn.disabled = !username.value;
});

saveScore = (e) => {
  console.log("click!!!");
  e.preventDefault();
};
