function getComputerChoice () {
  const elements = ["Shield", "Virus", "Code"];
  let randomIndex = Math.floor(Math.random()*elements.length);
  let resultComputerChoice = elements[randomIndex];
  return (resultComputerChoice);
}

function getUserChoice () {
  let takeUserInput = prompt("Make your choice, type: 'Shield' or 'Virus' or 'Code'");
  (takeUserInput == null) ? alert("error, you must type something") : takeUserInput = takeUserInput.toLowerCase();
  if (takeUserInput === "shield") {
    return "Shield";
  } else if (takeUserInput === "virus") {
    return "Virus";
  } else if (takeUserInput === "code") {
    return "Code";
  } else {
    return (alert("Wrong choice!"));
  }
}

function playRound () {
  
  let humanPlayer = getUserChoice();
  let computerPlayer = getComputerChoice();
  console.log("player choose", humanPlayer);
  console.log("PC choose", computerPlayer);
  let roundWinner;
  let roundLooser;
  let roundDraw;
  if (humanPlayer == "Shield" && computerPlayer == "Virus") {
    roundWinner = "You win! Shield beat Virus";
  } else if (humanPlayer == "Shield" && computerPlayer == "Code") {
    roundLooser = "You loose! Shield loose to Code";
  } else if (humanPlayer == "Virus" && computerPlayer == "Code") {
    roundWinner = "You win! Virus beat Code";
  } else if (humanPlayer == "Virus" && computerPlayer == "Shield") {
    roundLooser = "You loose! Virus loose to Shield";
  } else if (humanPlayer == "Code" && computerPlayer == "Shield") {
    roundWinner = "You win! Code beat Shield";
  } else if (humanPlayer == "Code" && computerPlayer == "Virus") {
    roundLooser = "You loose! Code loose to Virus";
  } else if (humanPlayer == "Shield" && computerPlayer == "Shield") {
    roundDraw = "Draw for shields!";
  } else if (humanPlayer == "Virus" && computerPlayer == "Virus") {
    roundDraw = "Draw for virus!";
  } else if (humanPlayer == "Code" && computerPlayer == "Code") {
    roundDraw = "Draw for Code!";
  } else {
    return "Something went wrong! Let's try again";
  }

  if (roundWinner == "You win! Shield beat Virus" || roundWinner == "You win! Virus beat Code" || roundWinner == "You win! Code beat Shield"){
    return (roundWinner);
  } else if (roundLooser == "You loose! Shield loose to Code" || roundLooser == "You loose! Virus loose to Shield" || roundLooser == "You loose! Code loose to Virus"){
    return (roundLooser);
  } else if (roundDraw == "Draw for shields!" || roundDraw == "Draw for virus!" || roundDraw == "Draw for Code!") {
    return (roundDraw);
  } else {
    return ("error again, let's try again");
  }
}

function game () {
  let counterWin = 0;
  let counterLoose = 0;
  let counterDraw = 0;
  for (let i = 1; i <=5; i++) {
    const roundGame = playRound();
    if (roundGame == "You win! Shield beat Virus" || roundGame == "You win! Virus beat Code" || roundGame == "You win! Code beat Shield") {
      counterWin++;
    } else if (roundGame == "You loose! Shield loose to Code" || roundGame == "You loose! Virus loose to Shield" || roundGame == "You loose! Code loose to Virus") {
      counterLoose++;
    } else if (roundGame == "Draw for shields!" || roundGame == "Draw for virus!" || roundGame == "Draw for Code!") {
      counterDraw++;
    }
    console.log(`Round ${i} ${roundGame}`);
  }

  if ((counterWin > counterLoose)&&((counterWin>counterDraw)||(counterWin==counterDraw))){
    console.log("YOU WIN THIS GAME");
  } else if ((counterLoose>counterWin) && ((counterLoose>counterDraw) || (counterLoose == counterDraw))) {
    console.log("YOU LOOSE THIS GAME"); 
  } else if (((counterDraw>counterWin) && (counterDraw>counterLoose))||(counterWin==counterLoose)) {
    console.log("IT'S A DRAW!");
  } else {
    console.log("not enough rounds");
  }

  console.log(counterWin);
  console.log(counterLoose); 
  console.log(counterDraw);
}
game();
