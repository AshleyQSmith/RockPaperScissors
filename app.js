
let choices = ['rock', 'paper', 'scissors']

function randomComputerChoice (){
  let computerChoiceIndex = Math.floor(Math.random() * choices.length)
  let computerChoice = choices[computerChoiceIndex]
  return computerChoice
}



function play(result) {
let compChoice = randomComputerChoice()

  if (result == compChoice) {
    alert('You Tied!')}

  if ((result == 'rock') && (compChoice == 'paper')) {
    alert('You Lost :(')}
  
  if ((result == 'rock') && (compChoice == 'scissors')) {
    alert('You Win :)')}

  if ((result == 'paper') && (compChoice == 'rock')) {
    alert('You Win :)')}

  if ((result == 'paper') && (compChoice == "scissors")) {
    alert('You Lost :(')}

  if ((result == 'scissors') && (compChoice == 'paper')) {
    alert('You Win :)')}

  if ((result == 'scissors') && (compChoice == 'rock')) {
    alert('You Lost :(')}
  
}


