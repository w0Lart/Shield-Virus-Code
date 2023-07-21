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