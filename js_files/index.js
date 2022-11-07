// Vinz
const username = document.getElementById("username");
const submitNameBtn = document.getElementById("submitNameBtn");

//the quiz will only start if there's a username
username.addEventListener("keyup", () => {
  submitNameBtn.disabled = !username.value;
});
// saving the username to the localstorage
saveUserName = (e) => {
  //console.log("Click!!!");
  e.preventDefault();

  localStorage.setItem("recentName", username.value);
  //console.log(localStorage.getItem("recentName"));

  //dirext to the game.html which is the quiz
  return window.location.assign("/../game/game.html");
};
