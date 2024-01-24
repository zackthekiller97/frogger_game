const timeLeftDisplay = document.querySelector("#time-left")
const resultDisplay = document.querySelector("#result")
const squares = document.querySelectorAll('.grid div')
const logsleft = document.querySelectorAll('.log-left')
const logsright = document.querySelectorAll('.log-right')
const carsleft = document.querySelectorAll('.car-left')
const carsright = document.querySelectorAll('.car-right')
let currentIndex = 76
let currentTime = 20
const width = 9
function moveFrog(e) {
    squares[currentIndex].classList.remove('frog')
    switch(e.key) {
        case 'ArrowRight' :
            if (currentIndex % width < width -1) currentIndex += 1
            break
        case 'ArrowLeft' :
            if(currentIndex % width !== 0) currentIndex -= 1
            break
        case 'ArrowUp' :
            if (currentIndex - width >= 0) currentIndex -= width
            break
        case 'ArrowDown' :
            if (currentIndex + width < width * width) currentIndex += width
            break
    }
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)
document.addEventListener('keyup', lose)
document.addEventListener('keyup', winning)

function autoMoveElements() {
    logsleft.forEach(logleft => moveLogLeft(logleft))
    logsright.forEach(logright => moveLogRight(logright))
    carsleft.forEach(carleft => moveCarLeft(carleft))
    carsright.forEach(carright => moveCarRight(carright))
    timeRunning()
    lose()
    winning()
}

function moveLogLeft(logleft) {
    switch(true) {
        case logleft.classList.contains('l1') :
            logleft.classList.remove('l1')
            logleft.classList.add('l2')
            break
        case logleft.classList.contains('l2') :
            logleft.classList.remove('l2')
            logleft.classList.add('l3')
            break
        case logleft.classList.contains('l3') :
            logleft.classList.remove('l3')
            logleft.classList.add('l4')
            break
        case logleft.classList.contains('l4') :
            logleft.classList.remove('l4')
            logleft.classList.add('l5')
            break
        case logleft.classList.contains('l5') :
            logleft.classList.remove('l5')
            logleft.classList.add('l1')
            break
    }
}

function moveLogRight(logright) {
    switch(true) {
        case logright.classList.contains('l1') :
            logright.classList.remove('l1')
            logright.classList.add('l5')
            break
        case logright.classList.contains('l2') :
            logright.classList.remove('l2')
            logright.classList.add('l1')
            break
        case logright.classList.contains('l3') :
            logright.classList.remove('l3')
            logright.classList.add('l2')
            break
        case logright.classList.contains('l4') :
            logright.classList.remove('l4')
            logright.classList.add('l3')
            break
        case logright.classList.contains('l5') :
            logright.classList.remove('l5')
            logright.classList.add('l4')
            break
    }
}

function moveCarLeft(carleft) {
    switch(true) {
        case carleft.classList.contains('c1') :
            carleft.classList.remove('c1')
            carleft.classList.add('c2')
            break
        case carleft.classList.contains('c2') :
            carleft.classList.remove('c2')
            carleft.classList.add('c3')
            break
        case carleft.classList.contains('c3') :
            carleft.classList.remove('c3')
            carleft.classList.add('c1')
            break
    }
}

function moveCarRight(carright) {
    switch(true) {
        case carright.classList.contains('c1') :
            carright.classList.remove('c1')
            carright.classList.add('c3')
            break
        case carright.classList.contains('c2') :
            carright.classList.remove('c2')
            carright.classList.add('c1')
            break
        case carright.classList.contains('c3') :
            carright.classList.remove('c3')
            carright.classList.add('c2')
            break
    }
}

function lose() {
    if ((squares[currentIndex].classList.contains('c1') || squares[currentIndex].classList.contains('l4') || squares[currentIndex].classList.contains('l5')) || currentTime == 0) {
        resultDisplay.innerHTML = "YOU LOSE"
        clearInterval(runninggame)
        document.removeEventListener('keyup', moveFrog)
        document.removeEventListener('keyup', lose)
        document.removeEventListener('keyup', winning)
    }
}

function timeRunning() {
    currentTime -= 1
    timeLeftDisplay.innerHTML = currentTime
}

function winning() {
    if (squares[currentIndex].classList.contains('ending-block')) {
        resultDisplay.innerHTML = "YOU WIN"
        clearInterval(runninggame)
        document.removeEventListener('keyup', moveFrog)
        document.removeEventListener('keyup', lose)
        document.removeEventListener('keyup', winning)
    }
}

runninggame = setInterval(autoMoveElements, 1000)