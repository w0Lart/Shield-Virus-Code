function getComputerChoice () {
  const elements = ["Shield", "Virus", "Code"];
  let randomIndex = Math.floor(Math.random()*elements.length);
  let resultComputerChoice = elements[randomIndex];
  return (resultComputerChoice);
}

let buttons = document.querySelector('.chooseButtons');
let playerPoints = document.getElementById('player');
let pcPoints = document.getElementById('pc');
let gameWinner = document.getElementById('winner');
let roundWin = document.getElementById('round');


//function getUserChoice () {
//  let takeUserInput = addEventListener('click', buttonChoice);
//  (takeUserInput == null) ? alert("error, you must type something") : takeUserInput = takeUserInput.toLowerCase();
//  if (takeUserInput === "shield") {
//    return "Shield";
//  } else if (takeUserInput === "virus") {
//    return "Virus";
//  } else if (takeUserInput === "code") {
//    return "Code";
//  } else {
//    return (alert("Wrong choice!"));
//  }
//}
let roundCounter = 0;
let counterWin = 0;
let counterLoose = 0;
let counterDraw = 0;
let roundWinner;


function playRound (userchoice) {

  let humanPlayer = userchoice;
  let computerPlayer = getComputerChoice();
  console.log("player choose", humanPlayer);
  console.log("PC choose", computerPlayer);
  if (humanPlayer == "Shield" && computerPlayer == "Virus") {
    roundWinner = "You win this round! Shield beat Virus";
    roundCounter++;
    counterWin++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Shield" && computerPlayer == "Code") {
    roundWinner = "You loose this round! Shield loose to Code";
    roundCounter++;
    counterLoose++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Virus" && computerPlayer == "Code") {
    roundWinner = "You win this round! Virus beat Code";
    roundCounter++;
    counterWin++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Virus" && computerPlayer == "Shield") {
    roundWinner = "You loose this round! Virus loose to Shield";
    roundCounter++;
    counterLoose++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Code" && computerPlayer == "Shield") {
    roundWinner = "You win this round! Code beat Shield";
    roundCounter++;
    counterWin++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Code" && computerPlayer == "Virus") {
    roundWinner = "You loose this round! Code loose to Virus";
    roundCounter++;
    counterLoose++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Shield" && computerPlayer == "Shield") {
    roundWinner = "Draw for shields!";
    roundCounter++;
    counterDraw++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Virus" && computerPlayer == "Virus") {
    roundWinner = "Draw for virus!";
    roundCounter++;
    counterDraw++;
    console.log(roundWinner);
    return (roundWinner);
  } else if (humanPlayer == "Code" && computerPlayer == "Code") {
    roundWinner = "Draw for Code!";
    roundCounter++;
    counterDraw++;
    console.log(roundWinner);
    return (roundWinner);
  } else {
    return "Something went wrong! Let's try again";
  }
  

  //if (roundWinner == "You win! Shield beat Virus" || roundWinner == "You win! Virus beat Code" || roundWinner == "You win! Code beat Shield"){
  //  return (roundWinner);
  //} else if (roundLooser == "You loose! Shield loose to Code" || roundLooser == "You loose! Virus loose to Shield" || roundLooser == "You loose! Code loose to Virus"){
  //  return (roundLooser);
  //} else if (roundDraw == "Draw for shields!" || roundDraw == "Draw for virus!" || roundDraw == "Draw for Code!") {
  //  return (roundDraw);
  //} else {
  //  return ("can't find a winner, let's try again");
  //}
  

}

function clickHandler(event) {
  if (event.target.tagName === "BUTTON") {
    let buttonText = event.target.innerText;

    playRound(buttonText);
    console.log("rounds " + roundCounter);
    console.log("wins " + counterWin);
    console.log("looses " + counterLoose);
    console.log("draws " + counterDraw);
    checkWinner();
    if (roundCounter === 5) {
      buttons.removeEventListener('click', clickHandler);
    }
    playerPoints.textContent = counterWin;
    pcPoints.textContent = counterLoose;
    roundWin.textContent = roundWinner;
  }
}

buttons.addEventListener('click', clickHandler);


function checkWinner() {
  if (roundCounter !== 5) {
    gameWinner.textContent = (`Round ${roundCounter}`);
  } else {
    if ((counterWin > counterLoose)&&((counterWin>counterDraw)||(counterWin==counterDraw))){
      gameWinner.textContent = "YOU WIN THIS GAME :)";
    } else if ((counterLoose>counterWin) && ((counterLoose>counterDraw) || (counterLoose == counterDraw))) {
      gameWinner.textContent = "YOU LOOSE THIS GAME :("; 
    } else if (((counterDraw>counterWin) && (counterDraw>counterLoose))||(counterWin==counterLoose)) {
      gameWinner.textContent = ("IT'S A DRAW! :|");
    } else {
      gameWinner.textContent = ("not enough rounds");
    }
  }
}




//function game () {
//  let counterWin = 0;
//  let counterLoose = 0;
//  let counterDraw = 0;
//  for (let i = 1; i <=5; i++) {
//    const roundGame = playRound();
//    if (roundGame == "You win! Shield beat Virus" || roundGame == "You win! Virus beat Code" || roundGame == "You win! Code beat Shield") {
//      counterWin++;
//    } else if (roundGame == "You loose! Shield loose to Code" || roundGame == "You loose! Virus loose to Shield" || roundGame == "You loose! Code loose to Virus") {
//      counterLoose++;
//    } else if (roundGame == "Draw for shields!" || roundGame == "Draw for virus!" || roundGame == "Draw for Code!") {
//      counterDraw++;
//    }
//    console.log(`Round ${i} ${roundGame}`);
//  }

//  if ((counterWin > counterLoose)&&((counterWin>counterDraw)||(counterWin==counterDraw))){
//    console.log("YOU WIN THIS GAME");
//  } else if ((counterLoose>counterWin) && ((counterLoose>counterDraw) || (counterLoose == counterDraw))) {
//    console.log("YOU LOOSE THIS GAME"); 
//  } else if (((counterDraw>counterWin) && (counterDraw>counterLoose))||(counterWin==counterLoose)) {
//    console.log("IT'S A DRAW!");
//  } else {
//    console.log("not enough rounds");
//  }

//  console.log(counterWin);
//  console.log(counterLoose); 
//  console.log(counterDraw);
//}
//game();
