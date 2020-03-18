
let choices = ['rock', 'paper', 'scissors']

function randomComputerChoice (){
  let computerChoiceIndex = Math.floor(Math.random() * choices.length)
  let computerChoice = choices[computerChoiceIndex]
  return computerChoice
}



function play(result) {
let compChoice = randomComputerChoice()

  if (result == compChoice) {
    console.log('tied')}

  if ((result == 'rock') && (compChoice == 'paper')) {
    console.log('loser')}
  
  if ((result == 'rock') && (compChoice == 'scissors')) {
    console.log('winner')}

  if ((result == 'paper') && (compChoice == 'rock')) {
    console.log('winner')}

  if ((result == 'paper') && (compChoice == "scissors")) {
    console.log('loser')}

  if ((result == 'scissors') && (compChoice == 'paper')) {
    console.log('winner')}

  if ((result == 'scissors') && (compChoice == 'rock')) {
     console.log('loser')}
  
}


