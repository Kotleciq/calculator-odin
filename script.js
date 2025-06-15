let number1 = ''
let number2 = ''
let final
let typeOfOperation
let isOperationSpecified = false
let activeNumber = 1
let isDecimal = false
let subDisplay = document.querySelector('#subDisplay')
let display = document.querySelector('#display')



let clearbtn = document.querySelector('#clearBtn')
clearbtn.addEventListener('click', clear)

function clear(){
    number1 = ''
    number2 = ''
    typeOfOperation = ''
    isOperationSpecified = false
    display.textContent = ''
    activeNumber = 1
    isDecimal = false
    changeDisplays(number1, number2)
}

function changeDisplays(main, sub){
    display.textContent = main
    subDisplay.textContent = sub
}

function addNumber(number) {
    
    if(!isOperationSpecified)
    {   
        number1 += number
        display.textContent = number1
    }
    else{
        activeNumber = 2
        changeDisplays(number2, number1)
        subDisplay.textContent += typeOfOperation
        number2 += number
        display.textContent = number2
    }
}

function addDecimal(){
    
    if(!isDecimal){
        if(activeNumber == 1){
            
            number1 += '.'
            display.textContent = number1
        }
        else{ 
            number2 += '.' 
            display.textContent = number2}
        
        isDecimal = true
    }
}

// number buttons

let buttons = document.querySelectorAll('.btn')
buttons.forEach(button =>{
    button.addEventListener('click', function(e){
         addNumber(parseInt(e.target.textContent))
    })
})


//operation buttons
let opButtons = document.querySelectorAll('.opBtn')
opButtons.forEach(button =>{
    button.addEventListener('click', function(e){
        if(activeNumber == 2){
            handleOperation()
        }
        changeDisplays('', number1)
        typeOfOperation =  e.target.textContent
        display.textContent = typeOfOperation
        isOperationSpecified = true
    })
})

function undo(){
    if(activeNumber = 1)
    {
        
        return
    }
}

let decimal = document.querySelector('#decimal')
decimal.addEventListener('click', addDecimal)

function handleOperation(){
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    console.log(number1);
    console.log(number2);
    final = number1
    console.log(typeOfOperation);

    switch (typeOfOperation) {
        case '+':
            console.log('+');
            final = number1+number2
            break;
        case '-':
            console.log('-');
            final = number1-number2
            break;
        case 'x':
            console.log('x');
            final = number1*number2
            break;
        case '÷':
            console.log('dziel');
            final = number1/number2
            break;
        default:
            break;
    }
    clear()
    changeDisplays(final, final)
    addNumber(final)
}

document.querySelector('.operation').addEventListener('click', handleOperation)
function logxd(){
    
    
}

