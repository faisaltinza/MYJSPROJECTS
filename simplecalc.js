const buttonEl = document.querySelectorAll('button');
const displayE1 = document.getElementById('display');
let calculated = false;
let Oprator = false;

buttonEl.forEach((e)=>{
    e.addEventListener('click', function () {
        const buttonValue = (e.innerHTML)
        if (buttonValue === 'C'){
            calculated = false;
            Oprator = false;
            clearResults()
        }else if(buttonValue === '='){
            try {calculated = true;
                Oprator = true;
                calculateResult()
                // risky code
            } catch(error) {
                Oprator = true;
                displayE1.value = 'error';
                // error aaya to yeh chalega
            }

        }else if(buttonValue === '←'){
            if(['+', '-', '*', '/'].includes(displayE1.value.slice(-1))){
                Oprator = false
            }
            clearlastDigit()
            if(['+', '-', '*', '/'].includes(displayE1.value.slice(-1))) {
                Oprator = true
            }

        }else if(['+', '-', '*', '/'].includes(buttonValue)){
            if(displayE1.value === ""){
                console.log('empty')
                return;
            }
            else if(['+', '-', '*', '/'].includes(displayE1.value.slice(-1))){
                console.log('Not allowed')
            }
            if (Oprator === false){
                appendValue(buttonValue)
                Oprator = true
            }
            else{
                console.log(Oprator)}
        }
        else {
            appendValue(buttonValue)
            Oprator = false
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
    Oprator = true
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

