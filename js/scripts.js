function getComputerChoice () {
  const elements = ["Shield", "Virus", "Code"];
  let randomIndex = Math.floor(Math.random()*elements.length);
  let resultComputerChoice = elements[randomIndex];
  return (resultComputerChoice);
}

function getUserChoice () {
  let takeUserInput = prompt("Make your choice, type: 'Shield' or 'Virus' or 'Code'");
  let makeInputLoverCase = takeUserInput.toLowerCase();
  if (makeInputLoverCase === "shield") {
    return "Shield";
  } else if (makeInputLoverCase === "virus") {
    return "Virus";
  } else if (makeInputLoverCase === "Code") {
    return "Code";
  } else {
    return (alert("Wrong choice!"));
  }
}

function playRound () {
  let humanPlayer = getUserChoice();
  let computerPlayer = getComputerChoice();
  if (humanPlayer === "Shield" && computerPlayer === "Virus") {
    return ("You win! Shield beat Virus");
  } else if (humanPlayer === "Shield" && computerPlayer === "Code") {
    return ("You loose! Shield loose to Code");
  } else if (humanPlayer === "Virus" && computerPlayer === "Code") {
    return ("You win! Virus beat Code");
  } else if (humanPlayer === "Virus" && computerPlayer === "Shield") {
    return ("You loose! Virus loose to Shield");
  }  else if (humanPlayer === "Code" && computerPlayer === "Shield") {
    return ("You win! Code beat Shield");
  } else if (humanPlayer === "Code" && computerPlayer === "Virus") {
    return ("You loose! Code loose to Virus");
  } else {
    return ("Something went wrong! Let's try again");
  }
}

