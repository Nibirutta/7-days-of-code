let marketList = [[], [], [], []];
let categoryList = ["Frutas:", "Laticinios:", "Congelados:", "Doces:"]

document.getElementById("yes-button").addEventListener("click", function(){
    ProcedeToAdd();
});

document.getElementById("no-button").addEventListener("click", function(){
    ShowList();
});

document.getElementById("submit-button").addEventListener("click", function(){
    AddItemToList();
});

function ProcedeToAdd() {
    document.getElementById("market-list").style.display = "none";
    document.getElementById("list-control").style.display = "flex";
}

function ShowList() {
    document.getElementById("market-list").style.display = "none";

    let myList = document.getElementById("final-list");

    for(i = 0; i < marketList.length; i++){
        let item = document.createElement("li");
        item.style.fontSize = "1.5rem";
        item.style.lineHeight = "3rem";
        item.style.fontWeight = "bold";
        item.textContent = (categoryList[i]);
        myList.appendChild(item);
        for(j = 0; j < marketList[i].length; j++){
            item = document.createElement("li");
            item.style.fontSize = "1.25rem";
            item.style.lineHeight = "2rem";
            item.textContent = (marketList[i][j]);
            myList.appendChild(item);
        }
    }

    document.getElementById("display-list").style.display = "block";
}

function AddItemToList() {
    if(document.getElementById("item-name").value === ""){
        alert("Preencha o campo!");
        return;
    }

    let itemName = document.getElementById("item-name").value;

    for(i = 0; i < marketList.length; i++){
        if(marketList[i].includes(itemName)){
            alert("O item já está na lista!");
            return;
        }
    }

    switch (document.getElementById("item-type").value){
        case "frutas":
            marketList[0].push(itemName);
            break;
        case "laticinios":
            marketList[1].push(itemName);
            break;
        case "congelados":
            marketList[2].push(itemName);
            break;
        case "doces":
            marketList[3].push(itemName);
            break;
        default:
            alert("Tipo inválido!")
            break;
    }

    document.getElementById("item-name").value = "";
    document.getElementById("list-control").style.display = "none";
    document.getElementById("market-list").style.display = "flex";    
}