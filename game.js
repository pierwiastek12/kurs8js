const canvas = document.querySelector('#game_canvas');



let colors = ["firebrick", "seagreen", "dodgerblue", "orange", "yellow", "sienna", "magenta", "gray"];

let solution = ["firebrick", "seagreen", "dodgerblue", "magenta", "yellow"];

let state = ["empty", "empty", "empty", "empty", "empty"];
for( let i =0 ;i<8;i++){
    let name = '#c'+ (i+1) ;
    let element = document.querySelector(name);
    element.style.backgroundColor = colors[i];
}
function drawPill(x,y,type){
    if(type =="empty"){

    }
}



function startBoard{
    for(let i =0; i<5;i++){

        drawPill(100 + i *100, 50, "empty")
    }

}



window.addEventListener('load', startBoard);