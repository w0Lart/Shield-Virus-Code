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
  console.log(humanPlayer);
  console.log(computerPlayer);
  if (humanPlayer == "Shield" && computerPlayer == "Virus") {
    return ("You win! Shield beat Virus");
  } else if (humanPlayer == "Shield" && computerPlayer == "Code") {
    return ("You loose! Shield loose to Code");
  } else if (humanPlayer == "Virus" && computerPlayer == "Code") {
    return ("You win! Virus beat Code");
  } else if (humanPlayer == "Virus" && computerPlayer == "Shield") {
    return ("You loose! Virus loose to Shield");
  }  else if (humanPlayer == "Code" && computerPlayer == "Shield") {
    return ("You win! Code beat Shield");
  } else if (humanPlayer == "Code" && computerPlayer == "Virus") {
    return ("You loose! Code loose to Virus");
  } else if (humanPlayer == "Shield" && computerPlayer == "Shield") {
    return ("Draw for shields!")
  } else if (humanPlayer == "Virus" && computerPlayer == "Virus") {
    return ("Draw for virus!")
  } else if (humanPlayer == "Code" && computerPlayer == "Code") {
    return ("Draw for Code!")
  } else {
    return ("Something went wrong! Let's try again");
  }
}

function game () {
  const results = [];
  for (let i = 1; i <=5; i++) {
  const roundWinner = playRound();
  console.log(`round ${i}: winner ${roundWinner}`);
  } 
}
