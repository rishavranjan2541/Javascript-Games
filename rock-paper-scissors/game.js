const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const reslutDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }

    if(randomNumber === 2){
        computerChoice = 'scissors'
    }

    if(randomNumber === 3){
        computerChoice = 'papaer'
    }

    computerChoiceDisplay.innerHTML = computerChoice
    
}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's a draw"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You Win!"
    }

    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "You lost!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "You Win!"
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "You Win!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You Win!"
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You lost!"
    }

    reslutDisplay.innerHTML = result
}