let scoreIni = 8000; 

let display = document.querySelector(".lifePoint"); 

display.innerHTML = scoreIni; 

let userInput = document.querySelector(".display"); 

const btn = document.getElementById('btn'); 

const heal = document.getElementById('heal'); 


btn.addEventListener("click", function(){
    console.log("btn cliqué"); 

    scoreIni = eval(scoreIni - userInput.value); 
    console.log(scoreIni); 
    display.innerHTML = scoreIni;


    const message = document.querySelector('.message'); 

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

