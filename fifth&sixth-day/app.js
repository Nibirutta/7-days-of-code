let marketList = [[], [], [], []];
let categoryList = ["Frutas:", "Laticinios:", "Congelados:", "Doces:"];

document.getElementById("yes-button").addEventListener("click", function(){
    ProcedeToAdd();
});

document.getElementById("return-button").addEventListener("click", function(){
    ProcedeToAdd();
});

document.getElementById("no-button").addEventListener("click", function(){
    document.getElementById("main-menu").style.display = "none";
    ChangeList();
    document.getElementById("display-list").style.display = "flex";
});

document.getElementById("add-button").addEventListener("click", function(){
    AddItemToList();
});

document.getElementById("remove-button").addEventListener("click", function(){
    RemoveItem();
    ReturnToMenu();
});

function ProcedeToAdd(){
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("display-list").style.display = "none";
    document.getElementById("list-control").style.display = "flex";
}

function ChangeList(){
    let myList = document.getElementById("final-list");
    myList.innerHTML = "";

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
}

function AddItemToList(){
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

    ReturnToMenu();
}

function RemoveItem(){
    if(document.getElementById("item-name").value === ""){
        alert("Preencha o campo!");
        return;
    }

    let itemName = document.getElementById("item-name").value;

    for(i = 0; i < marketList.length; i++){
        if(marketList[i].indexOf(itemName) >= 0){
            marketList[i].splice(marketList[i].indexOf(itemName), 1);
            ChangeList();
            return;
        }
    }

    alert("Item não encontrado, tente novamente");
    document.getElementById("item-name").value = "";
}

function ReturnToMenu(){
    document.getElementById("item-name").value = "";
    document.getElementById("subtitle").innerHTML = "Deseja alterar a lista novamente?"
    document.getElementById("list-control").style.display = "none";
    document.getElementById("main-menu").style.display = "flex";
}