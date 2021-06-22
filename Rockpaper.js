let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const wine=document.getElementById("winn");
const lost=document.getElementById("losee");
const drawww=document.getElementById("draww");



function getcomputerchoice(){
  const choice=['r','p','s'];
  const r= Math.floor(Math.random()*3);
  return choice[r];
}
function playwin(){
  wine.play();
}
function playlose() {
  lost.play();
}
function playdraw(){
  drawww.play();
}

function word(letter){
  if (letter==="r") return "Rock";
  if(letter === "p") return "Papers";
  return "Scissors";
}


function wins(user,comp) {
  userscore++;
  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
  const u = "user".fontsize(3).sub();
  const c = "comp".fontsize(3).sub();
  result_div.innerHTML= word(user) + u + " beats " + word(comp) + c + " . You Win!";
  playwin();

}
function loses(user,comp) {
  compscore++;
  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
  const u = "user".fontsize(3).sub();
  const c = "comp".fontsize(3).sub();
  result_div.innerHTML= word(user)+ u + " loses to  " + word(comp)+ c + " . You Lose......";
  playlose();
}
function draw(user,comp) {

  userscore_span.innerHTML=userscore;
  compscore_span.innerHTML=compscore;
  const u = "user".fontsize(3).sub();
  const c = "comp".fontsize(3).sub();
  result_div.innerHTML= word(user)+ u + " equals " + word(comp)+ c + " Its a draw.......";
  playdraw();
}
//console.log(getcomputerchoice());
function game(userchoice) {
  const computerchoice=getcomputerchoice();
  switch(userchoice + computerchoice){
    case "sp":
    case "pr":
    case "rs":
      wins(userchoice,computerchoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      loses(userchoice,computerchoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userchoice,computerchoice);
      break;

  }

}

function main(){
  rock_div.addEventListener('click',function() {
    game("r");
  })
  paper_div.addEventListener('click',function() {
    game("p");
  })
  scissors_div.addEventListener('click',function() {
    game("s");
  })
}

main();
