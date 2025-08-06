const button = document.querySelectorAll('button')
button.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id
        evaluvation(playerSelection,computerPlay())
    })

})

const userChoice = document.getElementById("userChoice")
const compChoice = document.getElementById("computerChoice")
const userScore = document.getElementById("user-score")
const compScore = document.getElementById("computer-score")
const result = document.getElementById("result")
let userPoints= 0;
let computerPoints= 0;

function computerPlay() {
    const choice = ['Rock','Paper','Scissor']
    const randomChoices = Math.floor(Math.random() * choice.length)
    return choice[randomChoices]
}

function evaluvation(playerSelection,computerPlay) {
    console.log(playerSelection)
    console.log(computerPlay)
    if (playerSelection === computerPlay) {
        result.innerText = 'Game is Tie'
    }
    else if (playerSelection === 'Rock' && computerPlay === 'Scissor' || playerSelection === 'Scissor' && computerPlay === 'Paper' || playerSelection === 'Paper' && computerPlay === 'Rock') {
        userChoice.innerText = `User Choice : ${playerSelection}`
        compChoice.innerText = `Computer Choice : ${computerPlay}`
        result.innerText = `You Win ${playerSelection} beats ${computerPlay}`
        userScore.innerText = ++userPoints
        return
    }else {
        result.innerText = `You Loose ${playerSelection} beats ${computerPlay}`
        userChoice.innerText = `User Choice : ${playerSelection}`
        compChoice.innerText = `Computer Choice : ${computerPlay}`
        compScore.innerText = ++computerPoints
        return
    }
}