let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['🪨', '📃', '✂️']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == '🪨' && computerSelection == '✂️') ||
        (playerSelection == '✂️' && computerSelection == '📃') ||
        (playerSelection == '📃' && computerSelection == '🪨')) {
        
        playerScore += 1
        result = ('You Win! ' + playerSelection + ' X ' + computerSelection
            + "<br><br>PLAYER SCORE : " + playerScore + "<br>COMPUTER SCORE : " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You Won the Game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a Tie. You both chose ' + playerSelection
            + "<br><br>PLAYER SCORE : " + playerScore + "<br>COMPUTER SCORE : " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You Lose! ' + computerSelection + ' X ' + playerSelection
            + "<br><br>PLAYER SCORE : " + playerScore + "<br>COMPUTER SCORE : " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the Game! Reload the page to play Again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})