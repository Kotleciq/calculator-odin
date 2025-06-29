let number1 = ''
let number2 = ''
let final
let typeOfOperation
let isOperationSpecified = false
let activeNumber = 1
let isDecimal = false
let lastChar = 'none'
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
    lastChar = 'none'
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
        lastChar = 'number1'
    }
    else{
        activeNumber = 2
        changeDisplays(number2, number1)
        subDisplay.textContent += typeOfOperation
        number2 += number
        display.textContent = number2
        lastChar = 'number2'
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
        lastChar = 'decimal'
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
    switch (lastChar) {
        case 'none':
            
            break;
        case 'number1':
            number1 = number1.slice(number1.length*-1, number1.length-1)
            display.textContent = number1
            if(number1 == ''){
                number1 = '0'
                display.textContent = number1
            }
            break;
        case 'number2':
            number2 = number2.slice(number2.length*-1, number2.length-1)
            display.textContent = number2
            if(number2 == ''){
                number2 = '0'
                lastChar = 'operation'
                display.textContent = number2
            }
            break;
        case 'operation':
            typeOfOperation = ''
            isOperationSpecified = false
            activeNumber = 1
            lastChar = 'number1'
            changeDisplays(number1, number2)
            if(hasDecimal(number1))isDecimal = true
            else isDecimal = false
            break;
        case 'decimal':

            if(activeNumber == 1){
            
            number1 = number1.slice(number1.length*-1, number1.length-1)
            display.textContent = number1
            }
            else{
                
                number2 = number2.slice(number2.length*-1, number2.length-1)
                display.textContent = number2
            }
            
            break;
    
    }
}

let undoBtn = document.querySelector('#undoBtn')
undoBtn.addEventListener('click', undo)

let decimal = document.querySelector('#decimal')
decimal.addEventListener('click', addDecimal)

function handleOperation(){
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)


    final = number1


    switch (typeOfOperation) {
        case '+':

            final = number1+number2
            break;
        case '-':
            final = number1-number2
            break;
        case 'x':

            final = number1*number2
            break;
        case '÷':

            final = number1/number2
            break;
        default:
            break;
    }
    lastChar = 'operation'
    clear()
    changeDisplays(final, final)
    addNumber(final)
}

document.querySelector('.operation').addEventListener('click', handleOperation)

function hasDecimal(string) {
    for (let i = 0; i < string.length; i++) {
        if(string.slice(i,i+1) == '.'){
            return true
        }
    }
    return false
}

