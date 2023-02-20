let scoreHomeEL = document.getElementById("score-home-el")
let scoreGuestEL = document.getElementById("score-guest-el")
let scoreHome = 0
let scoreGuest = 0

//HOME
function add1Home() {
    scoreHome++
    scoreHomeEL.textContent = scoreHome
}

function add2Home() {
    scoreHome += 2
    scoreHomeEL.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3
    scoreHomeEL.textContent = scoreHome
}

function resetHome() {
    scoreHome = 0
    scoreHomeEL.textContent = scoreHome
}

//GUEST
function add1Guest() {
    scoreGuest++
    scoreGuestEL.textContent = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    scoreGuestEL.textContent = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    scoreGuestEL.textContent = scoreGuest
}

function resetGuest() {
    scoreGuest = 0
    scoreGuestEL.textContent = scoreGuest
}