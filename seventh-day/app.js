let oldValue = "";
let currentOperation = "";
let newValue = "0";
let hasUsedDot = false;

window.onload=function(){
    ShowAtDisplay();

    for(let i = 0; i < 10; i++){
        let id = `number${i}`;
        document.getElementById(id).addEventListener("click", function(){
            PassNumber(i, false);
        });
    }

    document.querySelectorAll(".oper-input").forEach(Element => {
        switch(Element.innerHTML){
            case "+":
                Element.addEventListener("click", function(){
                    ChangeSymbol("+", oldValue === "")
                });
                break;
            case "-":
                Element.addEventListener("click", function(){
                    ChangeSymbol("-", oldValue === "")
                });
                break;
            case "*":
                Element.addEventListener("click", function(){
                    ChangeSymbol("*", oldValue === "")
                });
                break;
            case "/":
                Element.addEventListener("click", function(){
                    ChangeSymbol("/", oldValue === "")
                });
                break;
            case "=":
                Element.addEventListener("click", function(){
                    let n1 = ConvertNumbers()[0];
                    let n2 = ConvertNumbers()[1];
                    let result;
                    hasUsedDot = false;
                    switch(currentOperation){
                        case "+":
                            oldValue = "";
                            currentOperation = "";
                            result = n1 + n2;
                            PassNumber(result, true);
                            break;
                        case "-":
                            oldValue = "";
                            currentOperation = "";
                            result = n1 - n2;
                            PassNumber(result, true);
                            break;
                        case "*":
                            oldValue = "";
                            currentOperation = "";
                            result = n1 * n2;
                            PassNumber(result, true);
                            break;
                        case "/":
                            oldValue = "";
                            currentOperation = "";
                            result = n1 / n2;
                            PassNumber(result, true);
                            break;
                        default:
                            console.log("f");
                            break;
                    }
                });
                break;
            default:
                console.log("f");
                break;
        }
    });

    document.getElementById("dot").addEventListener("click", function(){
        if(!hasUsedDot){
            PassNumber(",", false);
            hasUsedDot = true;
        }
    });

    document.getElementById("reset").addEventListener("click", function(){
        oldValue = "";
        currentOperation = "";
        newValue = "0";
        hasUsedDot = false;
        ShowAtDisplay();
    });
}

function PassNumber(num, specialCase){
    if((newValue === "0" || specialCase) && num != ","){
        newValue = String(num);
    }else{
        newValue+= String(num);
    }

    ShowAtDisplay();
}

function ShowAtDisplay(){
    newValue = newValue.substring(0, 10);
    console.log(parseFloat(newValue.replace(",", ".")))
    document.getElementById("display").innerHTML = oldValue + " " + currentOperation + " " + newValue;
}

function ConvertNumbers(){
    const n1 = parseFloat(oldValue.replace(",", "."));
    const n2 = parseFloat(newValue.replace(",", "."));

    return [n1, n2];
}

function ChangeSymbol(symbol, bool){
    if(bool){
        oldValue = newValue;
        newValue = "0";
        hasUsedDot = false;
        currentOperation = `${symbol}`;
        ShowAtDisplay();
    }else{
        currentOperation = `${symbol}`;
        ShowAtDisplay();
    }
}