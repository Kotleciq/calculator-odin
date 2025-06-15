let number1 = ''
let number2 = ''
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
        addNumber('.')
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



let decimal = document.querySelector('#decimal')
decimal.addEventListener('click', addDecimal)

function handleOperation(){
    isOperationSpecified = false
    activeNumber = 1

    switch (typeOfOperation) {
        case '+':
            console.log('+');
            
            final = parseFloat(number1)+parseFloat(number2)
            break;
        case '-':
            console.log('-');
            final = parseFloat(number1)-parseFloat(number2)
            break;
        case 'x':
            console.log('x');
            final = parseFloat(number1)*parseFloat(number2)
            break;
        case '÷':
            console.log('dziel');
            final = parseFloat(number1)/parseFloat(number2)
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