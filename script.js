let screen = document.getElementById("result")


function display (newvalue) {
    screen.value = screen.value + newvalue;  
    return newvalue; 
};

function solve(){

    let acalculer = screen.value; 

    let res = eval(screen.value); 

    screen.value = res; 

    return res; 

    if (res === 0) {
        let mess = document.querySelector(".message"); 
        mess.innerHTML = "Vous avez perdu"; 
    }else{
        mess.innerHTML = "Le duel continu"; 
    }
 
}

