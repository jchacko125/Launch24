const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    // CODE
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    
    // CODE
}

function resetPaddles() {
    // CODE
}

function resetBall() {
    // CODE
}

function clearBoard() {
    // CODE
}

function draw() {
    // CODE
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            // CODE
            if (cpucheck.checked) {
                // CODE
            }

            // CODE
        }, 10
    );
}

function score(player) {
    // CODE
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    // CODE
}