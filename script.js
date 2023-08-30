// Variables

let scoreIni = 8000;

let display = document.querySelector(".lifePoint");

display.innerHTML = "LP : " + scoreIni;

let userInput = document.querySelector(".display");

const dammage = document.getElementById("dammage");

const heal = document.getElementById("heal");

const reset = document.getElementById("reset");

const message = document.querySelector(".message");



// If the player receive dammage

dammage.addEventListener("click", function () {

    const isNumb = userInput.value.match(/^[0-9]+$/);

    if (isNumb === null) {
        alert("Wrong input Duellist !");
    }else{

  scoreIni = eval(scoreIni - userInput.value);
  console.log(scoreIni);
  display.innerHTML = "LP : " + scoreIni;
  userInput.value = "";

  if (scoreIni <= 0) {
    message.innerHTML = "This is a lesson, not the end";
  } else if (scoreIni > 4000) {
    message.innerHTML = "Believe in the cards'soul";
  } else {
    message.innerHTML = "The battle isn't over !";
  }
}});

// if the player gain lifepoints

heal.addEventListener("click", function () {

    const isNumb = userInput.value.match(/^[0-9]+$/);

    if (isNumb === null) {
        alert("Wrong input Duellist !");
    }else{


  scoreIni = scoreIni + parseInt(userInput.value);
  console.log(scoreIni);
  display.innerHTML = "LP : " + scoreIni;
  userInput.value = "";
}});

reset.addEventListener("click", function () {
  scoreIni = 8000;
  display.innerHTML = "LP : " + scoreIni;
  message.innerHTML = "";
  userInput.value = "";
});
