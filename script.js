let scoreIni = 8000; 

let display = document.querySelector(".lifePoint"); 

display.innerHTML = scoreIni; 

let userInput = document.querySelector(".display"); 

const btn = document.getElementById('btn'); 

const heal = document.getElementById('heal'); 

const reset = document.getElementById('reset')

const message = document.querySelector('.message'); 

btn.addEventListener("click", function(){
    console.log("btn cliqué"); 

    scoreIni = eval(scoreIni - userInput.value); 
    console.log(scoreIni); 
    display.innerHTML = scoreIni;


    

    if (scoreIni === 0) {
    
        message.innerHTML ="Vous avez perdu";
    
    } else {
    
        message.innerHTML= "Le duel continue";
    }; 
    
}); 

heal.addEventListener("click", function(){
    console.log("btn cliqué"); 

    scoreIni = scoreIni + parseInt(userInput.value); 
    console.log(scoreIni); 
    display.innerHTML = scoreIni;
    
}); 

reset.addEventListener("click", function(){
    scoreIni = 8000; 
    display.innerHTML = scoreIni;
    message.innerHTML=""; 
    userInput.value=""; 
})