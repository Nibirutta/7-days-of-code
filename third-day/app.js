questionAmount = 0;
let userChoice = "";
let tecnoList = [];


UpdateQuestion("Qual área o usuario deseja atuar?", "Front-end", "Back-end");

function UpdateQuestion(question, optionOne, optionTwo) {
    document.getElementById("main-question").innerHTML = question;
    document.getElementById("option-one").innerHTML = optionOne;
    document.getElementById("option-two").innerHTML = optionTwo;
}

function NextQuestion(option) {
    if (questionAmount === 0) {
        userChoice = document.getElementById(option).innerHTML;
    }

    if (questionAmount === 0 && userChoice === "Front-end") {
        UpdateQuestion("Qual linguagem o usuario deseja aprender?", "React", "Vue");
    }

    if (questionAmount === 0 && userChoice === "Back-end") {
        UpdateQuestion("Qual linguagem o usuario deseja aprender?", "C#", "Java");
    }

    if (questionAmount === 1) {
        UpdateQuestion("Qual área você deseja se especializar?", `${userChoice}`, "Full Stack");
    }

    if (questionAmount === 2) {
        document.getElementById("option-questions").style.display = "none";
        document.getElementById("writing-questions").style.display = "flex";
        document.getElementById("main-question").innerHTML = "Qual tecnologia você deseja aprender?";
    }

    questionAmount++;
}

function AddTec() {
    let tecName = document.getElementById("tecno-name").value;

    if (tecnoList.includes(tecName)) {
        alert("Tecnologia já adicionada!");
    } else if (tecName == "") {
        alert("Digite o nome da tecnologia!");
    } else {
        tecnoList.push(tecName);
    }

    UpdateList();
    document.getElementById("tecno-name").value = "";
}

function UpdateList() {
    let list = document.getElementById("tecno-list");
    list.innerHTML = "";

    for (let i = 0; i < tecnoList.length; i++) {
        let item = document.createElement("li");
        item.style.fontSize = "1.5rem";
        item.style.lineHeight = "2rem";
        item.textContent = tecnoList[i];
        list.appendChild(item);
    }
}

function Finish() {
    document.getElementById("writing-questions").style.display = "none";
    document.getElementById("main-question").innerHTML = "Obrigado por responder!";
}