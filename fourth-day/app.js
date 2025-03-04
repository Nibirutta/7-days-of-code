let secretNumber = Math.round(Math.random() * 10);
let guess = 0;

document.getElementById("check").addEventListener("click", VerifyNumber);

function VerifyNumber() {
    userGuess = document.getElementById("guess").value;
    guess++;

    if (userGuess == secretNumber) {
        document.getElementById("message-chat").innerHTML = `Parabéns, você acertou em ${guess} tentativas!`;
    } else {
        document.getElementById("message-chat").innerHTML = `Tente novamente! Tentativas restantes: ${3 - guess}`;
        document.getElementById("guess").value = "";
        
        if(guess > 2) {
            Retry();
        }
    }
}

function Retry() {
    document.getElementById("message-chat").innerHTML = `O número secreto era ${secretNumber}`
    document.getElementById("check").innerHTML = "Tentar novamente?"
    document.getElementById("check").removeEventListener("click", VerifyNumber);

    document.getElementById("check").addEventListener("click", function(){
        location.reload();
    });
}