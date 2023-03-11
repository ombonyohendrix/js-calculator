const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
// declaring the variables

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// adding eventlistener to the numbers
numbersEl.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' &haveDot){
            return;
        }
        dis2Num +=e.target.innerText;
        display2El.innerText = dis2Num;
    })
})
// adding eventlisteners to operations

operationEl.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) return;
        haveDot= false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            // converting from string back to integer
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;

        console.log(result);
    })
})
// function to clear the display
function clearVar(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1El.innerText =dis1Num;
    display2El.innerText ='';
    dis2Num = '';
    tempResultEl.innerText = result;
}

function mathOperation(){
    if (lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result =  parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result =  parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result =  parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result =  parseFloat(result) % parseFloat(dis2Num);
    }
}
// adding eventlistiner on  equal sign
equalEl.addEventListener('click', (e)=> {
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';

})
// addding eventlistener to C
clearEl.addEventListener('click', (e)=>{
    display1El.innerText = '';
    display2El.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText= '';

})
// adding eventlistener to CE
clearLastEl.addEventListener('click', (e)=>{
      display2El.innerText = '';
      dis2Num = '';
})
// making keyboard active

window.addEventListener('keydown', (e)=>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
    ){
        clickButtonEl(e.key);
    }else if(
       
        e.key === '+'||
        e.key === '-'||
        e.key === '/'||
        e.key === '%'
    ){
// to make the symbols active on the keyboard
    clickoperation(e.key);
    } else if( e.key === '*'){
        clickoperation('X');
    }else if(e.key === 'Enter' || e.key ==='='){
        clickEqual();
    }
})
// function to make the buttons active
 function clickButtonEl(key){
    numbersEl.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })

 }

 function clickoperation(key){
    operationEl.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
 }
// fuction to make = sign active on the keyboard
function clickEqual(){
    equalEl.click();
}