const buttonEl = document.querySelectorAll('button');
const displayE1 = document.getElementById('display');
let calculated = false;

buttonEl.forEach((e)=>{
    e.addEventListener('click', function () {
        const buttonValue = (e.innerHTML)
        if (buttonValue === 'C'){
            calculated = false;
            clearResults()
        }else if(buttonValue === '='){
            calculated = true;
            calculateResult()
        }else if(buttonValue === '←'){
            clearlastDigit()
        }
        else {
            appendValue(buttonValue)
        }
    } )
})

function clearResults() {
    displayE1.value = ""

}
function calculateResult() {
    if (displayE1.value == ""){
        displayE1.value = "Enter Some figures"
    }
    displayE1.value = eval(displayE1.value)

}
function appendValue(buttonValue) {
    if (calculated === true){
        displayE1.value = "";
        calculated = false;
    }
    displayE1.value += buttonValue //add in previous value
}
function clearlastDigit() {
    if (calculated === false) {
        displayE1.value = displayE1.value.slice(0, -1);
    }else{
        displayE1.value = ""
        calculated = true
    }
}
