const guess = document.getElementById("guess");
const report = document.getElementById("report");
const reset = document.getElementById("reset");
let MINUM = 1;
let MAXNUM = 100;

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.min = MINUM;
    guess.max = MAXNUM;

secret = Math.random();
let range = MAXNUM - MINUM + 1;
secret = secret * range;
secret = secret + MINUM;
secret = Math.floor(secret); //  
}

function makeGuess() {
    let myGuess = parseInt(guess.value); // GET FROM DOCUMENT!
if (myGuess == secret) {
    report.innerHTML += `<br>${myGuess} is correct! :)`;
    document.body.style.backgroundColor = "lightgreen"
    reset.style.visibility="visible"
    myConfetti ({
        particleCount: 100,
        spread: 160
    
    })
} else if (myGuess < secret) {
    report.innerHTML += `<br>${myGuess} is too small`;
} else {
    report.innerHTML += `<br>${myGuess} is too big`;
}


}