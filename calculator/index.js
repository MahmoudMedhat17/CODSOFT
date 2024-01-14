const numberBtns = document.querySelectorAll("#number");
const operationBtns = document.querySelectorAll("#operation");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const equalBtn = document.querySelector("#equal");
const currentOperandElement = document.querySelector("#currentOperand");

let currentOperand = "";
let operation = undefined;
let previousOperand = "";


function addNumber(value){
    if(value === "." && currentOperand.includes("."))return;
    currentOperand = currentOperand + value;
}

function clear(){
    currentOperand = "";
    previousOperand = "";
    operation = "";
}

function deleteNumber(){
    currentOperand = currentOperand.slice(0,-1);
}

function chooseOperation(operatorValue){
    if(currentOperand === "") return;
    if(operation !== "" && previousOperand !== ""){
        calculate();
    }

    operation = operatorValue;
    previousOperand = currentOperand;
    currentOperand = "";
}

function calculate(){
    let result = "";
    let previousValue = parseFloat(previousOperand);
    let currentValue = parseFloat(currentOperand);

    if(isNaN(previousValue) || isNaN(currentValue)) return;

    switch(operation){
        case "+":
            result = previousValue + currentValue;
            break;

        case "-":
            result = previousValue - currentValue;
            break;

        case "X":
            result = previousValue * currentValue;
            break;

        case "÷":
            result = previousValue / currentValue;
            break;

        default:
            break;
    }

    operation = undefined
    currentOperand = result;
    previousOperand = "";
}

function updateScreen(){
    if(operation){
        currentOperandElement.innerHTML = `${previousOperand} ${operation} ${currentOperand}`; 
    }else{
        currentOperandElement.innerHTML = currentOperand;
    }
}

numberBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        addNumber(btn.innerHTML);
        updateScreen();
    })
})

clearBtn.addEventListener("click", ()=>{
    clear();
    updateScreen();
})

deleteBtn.addEventListener("click",()=>{
    deleteNumber();
    updateScreen();
})

operationBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        chooseOperation(btn.innerHTML);
        updateScreen();
    })
})

equalBtn.addEventListener("click",()=>{
    calculate();
    updateScreen();
})