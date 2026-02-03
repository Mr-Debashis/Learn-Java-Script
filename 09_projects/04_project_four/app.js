let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessNum')
const preGuess = document.querySelector('.pre_guess')  //guessSlot
const remainGuess = document.querySelector('.remain_guess') //lastResult-remaining
const resultParas = document.querySelector('.resultParas')  //startOver
const dispalyMess = document.querySelector('.dispalyMess')

const p = document.createElement('p')

let userPreGuess = []

let guessLeft = 1
let playGame = true




if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number bigger than 1')
    } else if (guess > 100) {
        alert('Please enter a number smaller than 100')
    } else {
        userPreGuess.push(guess)
        if (guessLeft === 11) {
            displayGuess(guess)
            displayMessage(`Game Over ! Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Your guess it right`)
    } else if (guess < randomNum) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNum) {
        displayMessage(`Number is too high`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    preGuess.innerHTML += `${guess}, `
    guessLeft++;
    remainGuess.innerHTML = `${(10 - guessLeft) + 1}`
}

function displayMessage(message) {
    dispalyMess.innerHTML = `<h2> ${message} </h2>`

}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 id = 'newGame'; style = 'cursor: pointer'>Start New Game </h3>`
    resultParas.appendChild(p)
    playGame = false
    startGame();
}

function startGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        userPreGuess = [];
        preGuess.innerHTML = "";
        guessLeft = 1
        remainGuess.innerHTML = `${11 - guessLeft}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
};
